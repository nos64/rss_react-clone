import React, { Component } from 'react';
import { SearchProps, SearchState } from 'types/types';
import style from './SearchBar.module.scss';

export default class SearchBar extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchString: '',
    };
  }

  componentDidMount() {
    this.setState({ searchString: localStorage.getItem('searchString') || '' });
  }

  // componentWillUnmount() {
  //   localStorage.setItem('searchString', this.state.searchString);
  // }

  componentDidUpdate() {
    localStorage.setItem('searchString', this.state.searchString);
  }

  handleChange = (event: React.SyntheticEvent): void => {
    const input = event.target;
    if (input && input instanceof HTMLInputElement) {
      this.setState({ searchString: input.value });
    }
  };

  render() {
    return (
      <form className={style.searchForm}>
        <label>
          <input
            className={style.searchField}
            type="search"
            name="searchString"
            value={this.state.searchString}
            onChange={this.handleChange}
            placeholder="Enter your text here"
          />
        </label>
        <button type="button" className={style.searchButton}>
          Search
        </button>
      </form>
    );
  }
}
