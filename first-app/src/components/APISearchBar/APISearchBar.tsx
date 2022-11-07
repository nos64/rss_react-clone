import React from 'react';
import style from './APISearchBar.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setSearchQuery } from '../../store/apiReducer';

type SearchProps = {
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const APISearchBar = (props: SearchProps) => {
  const searchQuery = useAppSelector((state) => state.apiData.searchQuery);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const handleInputChange = (e: { target: { value: string } }) => {
    dispatch(setSearchQuery(e.target.value));
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
          onKeyPress={props.onKeyPress}
          value={searchQuery}
        />
      </label>
    </form>
  );
};

export default APISearchBar;
