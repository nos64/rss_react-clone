import APIErrorMessage from 'components/APIErrorMessage';
import APIModal from 'components/APIModal';
import APISearchBar from 'components/APISearchBar';
import CardSimpleText from 'components/CardSimpleText';
import React, { Component } from 'react';
import style from './APIComponent.module.scss';
import closeBtn from '../../assets/images/closeBtn.svg';
interface IPropsAPI {
  props?: string;
}

interface IStateAPI {
  searchQuery: string;
  error: null | { message: string };
  isLoaded: boolean;
  items: ICharacter[];
  activeModal: boolean;
  activeItem: null | ICharacter;
}
interface IItems {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null | number;
  };
  results: ICharacter[];
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

const BASE_PATH = 'https://rickandmortyapi.com/api';
const CHARACTERS = `${BASE_PATH}/character`;
const LOCATIONS = `${BASE_PATH}/location`;
const EPISODES = `${BASE_PATH}/episode`;
const SEARCH_PATH = '?name=';
const SEARCH_PARAM = 'query=';

export default class APIComponent extends Component<IPropsAPI, IStateAPI> {
  constructor(props: IPropsAPI) {
    super(props);
    this.state = {
      searchQuery: '',
      error: null,
      isLoaded: false,
      items: [],
      activeModal: false,
      activeItem: null,
    };
  }

  componentDidMount(): void {
    const { searchQuery } = this.state;
    this.fetchData(searchQuery);
  }

  fetchData = (searchQuery: string) => {
    fetch(`${CHARACTERS}${SEARCH_PATH}${searchQuery}`)
      .then((res): Promise<IItems> => res.json())
      .then(
        (result: IItems) => {
          if (result.results) {
            this.setState({
              isLoaded: true,
              items: result.results,
            });
          } else {
            this.setState({
              isLoaded: true,
              items: result.results,
              searchQuery: '',
            });
          }
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  handleInputChange = (e: { target: { value: string } }) => {
    this.setState({ searchQuery: e.target.value });
  };

  getSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const { searchQuery } = this.state;
      this.fetchData(searchQuery);
    }
  };

  openModal = (item: ICharacter) => {
    this.setState({
      activeModal: true,
      activeItem: item,
    });
  };

  closeModal = () => {
    this.setState({
      activeModal: false,
      activeItem: null,
    });
  };

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p> Error {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <>
          <h1 className={style.title} data-testid="api-title">
            API Page
          </h1>
          <APISearchBar
            onKeyPress={this.getSearch}
            onChange={this.handleInputChange}
            value={this.state.searchQuery}
          />
          {items ? (
            <ul className={style.card__list}>
              {items.map((item) => (
                <li className={style.card} key={item.id} onClick={() => this.openModal(item)}>
                  <h3 className={style.card__title}>{item.name}</h3>
                  <div className={style.card__imageWrapper}>
                    <img
                      className={style.card__image}
                      src={`${item.image}`}
                      alt={`Image ${item.name}`}
                    />
                  </div>
                  <div>
                    <CardSimpleText description={'Status: '} param={item.status} />
                    <CardSimpleText description={'Species: '} param={item.species} />
                    <CardSimpleText description={'Gender: '} param={item.gender} />
                    <CardSimpleText description={'Origin: '} param={item.origin.name} />
                    <CardSimpleText description={'Location: '} param={item.location.name} />
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <APIErrorMessage />
          )}
          <div
            className={this.state.activeModal ? style.active : style.modal}
            onClick={this.closeModal}
          >
            <div
              className={this.state.activeModal ? style.modalContentActive : style.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={style.modalClose} onClick={this.closeModal}>
                <img src={closeBtn} alt="close Btn" />
              </button>
              {this.state.activeItem ? <APIModal activeCard={this.state.activeItem} /> : ''}
            </div>
          </div>
        </>
      );
    }
  }
}
