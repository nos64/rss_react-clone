import React, { useContext, useEffect, useState } from 'react';
import style from './APIComponent.module.scss';
import APIErrorMessage from 'components/APIErrorMessage';
import APIModal from 'components/APIModal';
import APISearchBar from 'components/APISearchBar';
import loader from '../..//assets/images/oval.svg';
import APICard from 'components/APICard';
import { GlobalContext } from 'contexts/GlobalContext';
import APIFilterByGender from 'components/APIFilterByGender';
import APIFilterByStatus from 'components/APIFilterByStatus';
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
// ${BASE_PATH}${CHARACTERS}${PAGE}${defaultPage}&{FILTER_BY_GENDER}${FILTER_BY_STATUS}${SEARCH_PATH}${searchQuery}
//https://rickandmortyapi.com/api/character/?page=1&gender=female&status=&name=
const BASE_PATH = 'https://rickandmortyapi.com/api/';
const CHARACTERS = `character/`;
const LOCATIONS = `/location`;
const EPISODES = `/episode`;
const SEARCH_PATH = '&name=';
const PAGE = '?page=';
const defaultPage = 10;
const FILTER_BY_STATUS = '&status='; //alive, dead, unknown
// let statusParam: null | 'alive' | 'dead' | 'unknown';
const FILTER_BY_GENDER = '&gender='; //female, male, genderless, unknown
// let genderParam: null | 'female' | 'male' | 'genderless' | 'unknown';

const APIComponent = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const {
    searchQuery,
    isLoaded,
    isModalActive,
    activeItem,
    items,
    currentPage,
    responseFromServer,
    statusParam,
    genderParam,
  } = state;
  const [error, setError] = useState<Partial<IError>>();

  useEffect(() => {
    dispatch({ type: 'searchQuery', payload: localStorage.getItem('searchQuery') || '' });
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('searchQuery', searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    fetchData();
  }, [genderParam, statusParam]);

  const fetchData = () => {
    const url = `${BASE_PATH}${CHARACTERS}${PAGE}${currentPage}${FILTER_BY_GENDER}${genderParam}${FILTER_BY_STATUS}${statusParam}${SEARCH_PATH}${searchQuery}`;
    console.log('url: ', url);
    fetch(url)
      .then((res): Promise<IItems> => res.json())
      .then(
        (result: IItems) => {
          if (result.results) {
            dispatch({ type: 'isLoaded', payload: true });
            dispatch({ type: 'items', payload: result.results });
          } else {
            dispatch({ type: 'isLoaded', payload: true });
            dispatch({ type: 'items', payload: result.results });
            dispatch({ type: 'searchQuery', payload: '' });
            dispatch({ type: 'currentPage', payload: currentPage });
            dispatch({ type: 'genderParam', payload: genderParam });
            dispatch({ type: 'statusParam', payload: statusParam });
          }
        },
        (error: IError) => {
          dispatch({ type: 'isLoaded', payload: true });
          setError(error);
        }
      );
  };

  const getSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch({ type: 'searchQuery', payload: searchQuery });
      fetchData();
    }
  };

  const sortByGender = (genderParam: string) => {
    fetchData();
  };

  const filterByStatus = (statusParam: string) => {
    fetchData();
  };

  const handleClick = (item: ICharacter | null) => {
    dispatch({ type: 'isModalActive', payload: !isModalActive });
    dispatch({ type: 'activeItem', payload: !isModalActive ? item : null });
  };

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
        <APISearchBar onKeyPress={getSearch} />
        <APIFilterByGender filterByGender={sortByGender} />
        <APIFilterByStatus filterByStatus={filterByStatus} />
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
        <APIModal />
      </>
    );
  }
};

export default APIComponent;
