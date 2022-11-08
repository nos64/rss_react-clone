import React from 'react';
import style from './APISearchBar.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchItemsFromApi, setCurrentPage, setSearchQuery } from '../../store/apiReducer';

const APISearchBar = () => {
  const searchQuery = useAppSelector((state) => state.apiData.searchQuery);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const handleInputChange = (e: { target: { value: string } }) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const getSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(setSearchQuery(searchQuery));
      dispatch(setCurrentPage(1));
      dispatch(fetchItemsFromApi({ searchQuery }));
    }
  };

  return (
    <form className={style.searchForm} onSubmit={handleSubmit}>
      <label>
        <input
          className={style.searchField}
          type="search"
          name="searchString"
          placeholder="Enter name you character"
          onChange={handleInputChange}
          onKeyPress={getSearch}
          value={searchQuery}
          autoFocus
        />
      </label>
    </form>
  );
};

export default APISearchBar;
