import React, { useContext, useEffect, useState } from 'react';
import style from './APIComponent.module.scss';
import APIErrorMessage from 'components/APIErrorMessage';
import APIModal from 'components/APIModal';
import APISearchBar from 'components/APISearchBar';
import loader from '../..//assets/images/oval.svg';
import APICard from 'components/APICard';
import { APIContext } from 'contexts/APIContext';
export interface IError {
  message: string;
  fileName: string;
  lineNumber: string;
}
export interface IItems {
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

const APIComponent = () => {
  const { state, dispatch } = useContext(APIContext);
  const { searchQuery, error, items, responseFromServer } = state;

  // const [searchQuery, setSearchQuery] = useState<string>(localStorage.getItem('searchQuery') || '');
  // const [error, setError] = useState<Partial<IError>>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  // const [items, setItems] = useState<ICharacter[]>([]);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<ICharacter | null>(null);
  // const [responseFromServer, setResponseFromServer] = useState<IItems | null>(null);

  useEffect(() => {
    // setSearchQuery(localStorage.getItem('searchQuery') || '');
    fetchData(localStorage.getItem('searchQuery') || '');
  }, []);

  useEffect(() => {
    localStorage.setItem('searchQuery', searchQuery);
  }, [searchQuery]);

  const fetchData = (searchQuery: string) => {
    fetch(`${CHARACTERS}${SEARCH_PATH}${searchQuery}`)
      .then((res): Promise<IItems> => res.json())
      .then(
        (result: IItems) => {
          if (result.results) {
            setIsLoaded(true);
            // setItems(result.results);
            dispatch({ type: 'items', payload: result.results });
          } else {
            setIsLoaded(true);
            // setItems(result.results);
            dispatch({ type: 'items', payload: result.results });
            dispatch({ type: 'searchQuery', payload: '' });
            // setSearchQuery('');
          }
        },
        (error: IError) => {
          setIsLoaded(true);
          // setError(error);
          dispatch({ type: 'error', payload: error });
        }
      );
  };

  const handleInputChange = (e: { target: { value: string } }) => {
    // setSearchQuery(e.target.value);
    dispatch({ type: 'searchQuery', payload: e.target.value });
  };

  const getSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      fetchData(searchQuery);
    }
  };

  const handleClick = (item: ICharacter | null) => {
    setIsModalActive(!isModalActive);
    setActiveItem(!isModalActive ? item : null);
  };

  const closeModal = () => {
    setIsModalActive(false);
    setActiveItem(null);
  };

  // if (error) {
  //   return <p> Error {error.message}</p>;
  // }
  if (!isLoaded) {
    return <img src={loader} alt="Loader" />;
  } else {
    return (
      <>
        <h1 className={style.title} data-testid="api-title">
          API Page
        </h1>
        <APISearchBar onKeyPress={getSearch} onChange={handleInputChange} value={searchQuery} />
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
                isModalActive={isModalActive}
                activeItem={activeItem}
                onClick={() => handleClick(item)}
              />
            ))}
          </ul>
        ) : (
          <APIErrorMessage />
        )}
        <APIModal isModalActive={isModalActive} activeItem={activeItem} onClick={closeModal} />
      </>
    );
  }
};

export default APIComponent;
