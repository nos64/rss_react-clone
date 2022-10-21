import React from 'react';
import style from './APISearchBar.module.scss';

type SearchProps = {
  value: string;
  onChange: (e: { target: { value: string } }) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const APISearchBar = (props: SearchProps) => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <form className={style.searchForm} onSubmit={handleSubmit}>
      <label>
        <input
          className={style.searchField}
          type="search"
          name="searchString"
          placeholder="Enter name you character"
          onChange={props.onChange}
          onKeyPress={props.onKeyPress}
          value={props.value}
        />
      </label>
    </form>
  );
};

export default APISearchBar;
