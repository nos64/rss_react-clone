import React, { useContext } from 'react';
import style from './APISearchBar.module.scss';
import { GlobalContext } from 'contexts/GlobalContext';

type SearchProps = {
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const APISearchBar = (props: SearchProps) => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const handleInputChange = (e: { target: { value: string } }) => {
    dispatch({ type: 'searchQuery', payload: e.target.value });
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
          value={state.searchQuery}
        />
      </label>
    </form>
  );
};

export default APISearchBar;
