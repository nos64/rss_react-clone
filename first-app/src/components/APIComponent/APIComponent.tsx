import React, { Component } from 'react';
import style from './APIComponent.module.scss';
import APIErrorMessage from '../APIErrorMessage';
import APIModal from '../APIModal';
import APISearchBar from '../APISearchBar';
import loader from '../../assets/images/oval.svg';
import APICard from '../APICard';
import { BASE_PATH, CHARACTERS, SEARCH_PATH } from 'utils/constants';
import { ICharacter, IItems } from 'types/types';

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
    fetch(`${BASE_PATH}${CHARACTERS}${SEARCH_PATH}${searchQuery}`)
      .then((res): Promise<IItems> => res.json())
      .then(
        (result: IItems) => {
          this.setState({
            isLoaded: true,
            items: result.results,
            searchQuery: result.results ? this.state.searchQuery : '',
          });
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
                  {...item}
                  key={item.id}
                  isModalActive={this.state.isModalActive}
                  activeItem={this.state.activeItem}
                  onCardClick={() => this.handleClick(item)}
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
