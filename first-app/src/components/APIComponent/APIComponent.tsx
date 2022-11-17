import React, { useEffect } from 'react';
import style from './APIComponent.module.scss';
import APIErrorMessage from 'components/APIErrorMessage';
import APISearchBar from 'components/APISearchBar';
import loader from '../..//assets/images/oval.svg';
import APICard from 'components/APICard';
import APIFilterByGender from 'components/APIFilterByGender';
import APIFilterByStatus from 'components/APIFilterByStatus';
import APISortByName from 'components/APISortByName';
import APIPagination from 'components/APIPagination';
import APIInformationPanel from 'components/APIInformationPanel';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setSearchQuery, fetchItemsFromApi, setActivItem } from '../../store/apiReducer';

const APIComponent = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.apiData.searchQuery);
  const statusParam = useAppSelector((state) => state.apiData.statusParam);
  const genderParam = useAppSelector((state) => state.apiData.genderParam);
  const currentPage = useAppSelector((state) => state.apiData.currentPage);
  const isLoaded = useAppSelector((state) => state.apiData.isLoaded);
  const items = useAppSelector((state) => state.apiData.items);
  const error = useAppSelector((state) => state.apiData.error);

  useEffect(() => {
    dispatch(setSearchQuery(localStorage.getItem('searchQuery') || ''));
  }, []);

  useEffect(() => {
    localStorage.setItem('searchQuery', searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    dispatch(fetchItemsFromApi({ currentPage, genderParam, statusParam, searchQuery }));
  }, [genderParam, statusParam, currentPage, dispatch]);

  if (error) {
    return (
      <>
        <APISearchBar />
        <APIErrorMessage />
      </>
    );
  } else if (!isLoaded) {
    return <img src={loader} alt="Loader" />;
  } else {
    return (
      <>
        <h1 className={style.title} data-testid="api-title">
          Rick and Morty API
        </h1>
        <APISearchBar />
        {items && (
          <>
            <APIInformationPanel />
            <div className={style.sortAndFilter}>
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
