import React, { useContext, useEffect, useState } from 'react';
import style from './APIComponent.module.scss';
import APIErrorMessage from 'components/APIErrorMessage';
import APISearchBar from 'components/APISearchBar';
import loader from '../..//assets/images/oval.svg';
import APICard from 'components/APICard';
// import { GlobalContext } from 'contexts/GlobalContext';
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
} from 'utils/constants';
import { IError, IItems, ICharacter } from 'types/types';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  setSearchQuery,
  setStatusParam,
  setGenderParam,
  setCurrentPage,
  setActivItem,
  setIsLoaded,
  setResponseFromServer,
  setItems,
} from '../../store/apiReducer';

const APIComponent = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.apiData.searchQuery);
  const statusParam = useAppSelector((state) => state.apiData.statusParam);
  const genderParam = useAppSelector((state) => state.apiData.genderParam);
  const currentPage = useAppSelector((state) => state.apiData.currentPage);
  const activeItem = useAppSelector((state) => state.apiData.activeItem);
  const isLoaded = useAppSelector((state) => state.apiData.isLoaded);
  const items = useAppSelector((state) => state.apiData.items);
  const responseFromServer = useAppSelector((state) => state.apiData.responseFromServer);
  const [error, setError] = useState<Partial<IError>>();

  useEffect(() => {
    dispatch(setSearchQuery(localStorage.getItem('searchQuery') || ''));
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('searchQuery', searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    fetchData();
  }, [genderParam, statusParam, currentPage]);

  const fetchData = () => {
    const url = `${BASE_PATH}${CHARACTERS}${PAGE}${currentPage}${FILTER_BY_GENDER}${genderParam}${FILTER_BY_STATUS}${statusParam}${SEARCH_PATH}${searchQuery}`;
    fetch(url)
      .then((res): Promise<IItems> => res.json())
      .then(
        (result: IItems) => {
          dispatch(setResponseFromServer(result));
          dispatch(setIsLoaded(true));
          dispatch(setItems(result.results));
          dispatch(setSearchQuery(result.results ? searchQuery : ''));
        },
        (error: IError) => {
          dispatch(setIsLoaded(true));
          setError(error);
        }
      );
  };

  const getSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(setSearchQuery(searchQuery));
      dispatch(setCurrentPage(1));
      fetchData();
    }
  };

  // const filterByGender = () => fetchData();

  // const filterByStatus = () => fetchData();

  if (error) {
    console.log('error');
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
              {/* <APIFilterByGender filterByGender={filterByGender} />
              <APIFilterByStatus filterByStatus={filterByStatus} /> */}
              <APIFilterByGender />
              <APIFilterByStatus />
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
