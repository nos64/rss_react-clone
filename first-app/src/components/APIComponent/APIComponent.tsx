import React, { useContext, useEffect, useState } from 'react';
import style from './APIComponent.module.scss';
import APIErrorMessage from 'components/APIErrorMessage';
import APISearchBar from 'components/APISearchBar';
import loader from '../..//assets/images/oval.svg';
import APICard from 'components/APICard';
import { GlobalContext } from 'contexts/GlobalContext';
import APIFilterByGender from 'components/APIFilterByGender';
import APIFilterByStatus from 'components/APIFilterByStatus';
import APISortByName from 'components/APISortByName';
import APIPagination from 'components/APIPagination';
import APIInformationPanel from 'components/APIInformationPanel';
import { Link } from 'react-router-dom';

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

//https://rickandmortyapi.com/api/character/?page=1&gender=female&status=&name=
const BASE_PATH = 'https://rickandmortyapi.com/api/';
const CHARACTERS = `character/`;
const LOCATIONS = `/location`;
const EPISODES = `/episode`;
const SEARCH_PATH = '&name=';
const PAGE = '?page=';
const FILTER_BY_STATUS = '&status=';
const FILTER_BY_GENDER = '&gender=';

const APIComponent = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const {
    searchQuery,
    isLoaded,
    items,
    currentPage,
    statusParam,
    genderParam,
    sortByName,
    // responseErr,
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
  }, [genderParam, statusParam, sortByName, currentPage]);

  const fetchData = () => {
    const url = `${BASE_PATH}${CHARACTERS}${PAGE}${currentPage}${FILTER_BY_GENDER}${genderParam}${FILTER_BY_STATUS}${statusParam}${SEARCH_PATH}${searchQuery}`;
    fetch(url)
      .then((res): Promise<IItems> => res.json())
      .then(
        (result: IItems) => {
          dispatch({ type: 'responseFromServer', payload: result });
          if (result.results) {
            if (sortByName) sortyngByName(result.results);
            dispatch({ type: 'isLoaded', payload: true });
            dispatch({ type: 'items', payload: result.results });
          } else {
            if (sortByName) sortyngByName(result.results);
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
      dispatch({ type: 'currentPage', payload: 1 });
      fetchData();
    }
  };

  const sortyngByName = (items: ICharacter[]) => {
    items.sort((a, b) => {
      const nameA: string = a.name?.toLocaleLowerCase() || '';
      const nameB: string = b.name?.toLocaleLowerCase() || '';
      if (sortByName && sortByName === 'nameAZ') {
        return nameA === nameB ? 0 : nameA > nameB ? 1 : -1;
      }
      if (sortByName && sortByName === 'nameZA') {
        return nameA === nameB ? 0 : nameA < nameB ? 1 : -1;
      }
      return 0;
    });
  };

  const filterByGender = () => fetchData();

  const filterByStatus = () => fetchData();

  if (error) {
    return <p> Error {error.message}</p>;
  } else if (!isLoaded) {
    return <img src={loader} alt="Loader" />;
  } else {
    return (
      <>
        <h1 className={style.title} data-testid="api-title">
          Rick and Morty API
        </h1>
        <APISearchBar onKeyPress={getSearch} />
        {items && (
          <>
            <APIInformationPanel />
            <div className={style.sortAndFilter}>
              <APIFilterByGender filterByGender={filterByGender} />
              <APIFilterByStatus filterByStatus={filterByStatus} />
              <APISortByName />
            </div>
            <APIPagination />
          </>
        )}
        {items ? (
          <ul className={style.card__list}>
            {items.map((item) => (
              <Link key={item.id} to={`${item.id}`}>
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
                />
              </Link>
            ))}
          </ul>
        ) : (
          <APIErrorMessage />
        )}
      </>
    );
  }
};

export default APIComponent;
