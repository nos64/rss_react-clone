import React, { useEffect, useState } from 'react';
import style from './SearchBar.module.scss';

const SearchBar = () => {
  const [searchString, setSearchString] = useState(localStorage.getItem('searchString') || '');

  useEffect(() => {
    setSearchString(localStorage.getItem('searchString') || '');
  }, []);

  useEffect(() => {
    localStorage.setItem('searchString', searchString);
  }, [searchString]);

  const handleChange = (event: React.SyntheticEvent): void => {
    const input = event.target;
    if (input && input instanceof HTMLInputElement) {
      setSearchString(input.value);
    }
  };

  return (
    <form className={style.searchForm}>
      <label>
        <input
          className={style.searchField}
          type="search"
          name="searchString"
          value={searchString}
          onChange={(e) => handleChange(e)}
          placeholder="Enter your text here"
        />
      </label>
      <button type="button" className={style.searchButton}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
