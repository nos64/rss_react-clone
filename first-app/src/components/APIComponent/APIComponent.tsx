import React, { Component } from 'react';
import style from './APIComponent.module.scss';
import APIErrorMessage from 'components/APIErrorMessage';
import APIModal from 'components/APIModal';
import APISearchBar from 'components/APISearchBar';
import loader from '../..//assets/images/oval.svg';
import APICard from 'components/APICard';

interface IPropsAPI {
  props?: string;
}

interface IStateAPI {
  searchQuery: string;
  error: null | { message: string };
  isLoaded: boolean;
  items: ICharacter[];
  isModalActive: boolean;
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
      isModalActive: false,
      activeItem: null,
    };
  }

  componentDidMount(): void {
    this.setState({ searchQuery: localStorage.getItem('searchString') || '' });
    this.fetchData(localStorage.getItem('searchString') || '');
  }

  componentDidUpdate() {
    localStorage.setItem('searchString', this.state.searchQuery);
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

  handleClick = (item: ICharacter | null) => {
    this.setState({
      isModalActive: !this.state.isModalActive,
      activeItem: !this.state.isModalActive ? item : null,
    });
  };

  closeModal = () => {
    this.setState({
      isModalActive: false,
      activeItem: null,
    });
  };

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p> Error {error.message}</p>;
    } else if (!isLoaded) {
      return <img src={loader} alt="Loader" />;
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
                <APICard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  status={item.status}
                  gender={item.gender}
                  species={item.species}
                  origin={item.origin}
                  location={item.location}
                  type={item.type}
                  episode={item.episode}
                  created={item.created}
                  url={item.url}
                  isModalActive={this.state.isModalActive}
                  activeItem={this.state.activeItem}
                  onClick={() => this.handleClick(item)}
                />
              ))}
            </ul>
          ) : (
            <APIErrorMessage />
          )}
          <APIModal
            isModalActive={this.state.isModalActive}
            activeItem={this.state.activeItem}
            onClick={() => this.closeModal()}
          />
        </>
      );
    }
  }
}
