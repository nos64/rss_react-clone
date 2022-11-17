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
import {
  BASE_PATH,
  CHARACTERS,
  PAGE,
  FILTER_BY_GENDER,
  FILTER_BY_STATUS,
  SEARCH_PATH,
  sortByNameEnum,
} from 'utils/constants';
import { IError, IItems, ICharacter } from 'types/types';

const APIComponent = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const {
    searchQuery,
    isLoaded,
    items,
    activeItem,
    currentPage,
    statusParam,
    genderParam,
    sortByName,
  } = state;
  const [error, setError] = useState<Partial<IError>>();
  useEffect(() => {
    dispatch({ type: 'searchQuery', payload: localStorage.getItem('searchQuery') || '' });
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
          if (sortByName) sortyngByName(result.results);
          dispatch({ type: 'isLoaded', payload: true });
          dispatch({ type: 'items', payload: result.results });
          dispatch({ type: 'searchQuery', payload: result.results ? searchQuery : '' });
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
      if (sortByName && sortByName === sortByNameEnum.ASC) {
        return nameA === nameB ? 0 : nameA > nameB ? 1 : -1;
      }
      if (sortByName && sortByName === sortByNameEnum.DESC) {
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
                <APICard key={item.id} {...item} />
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
