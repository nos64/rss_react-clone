import React, { Component } from 'react';
import style from './APISearchBar.module.scss';

// value={this.state.searchQuery}
// onChange={this.handleInputChange}
// onKeyPress={this.getSearch}

type SearchProps = {
  value: string;
  onChange: (e: { target: { value: string } }) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

type SearchState = {
  searchString: string;
};

export default class APISearchBar extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchString: this.props.value,
    };
  }

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  render() {
    return (
      <form className={style.searchForm} onSubmit={this.handleSubmit}>
        <label>
          <input
            className={style.searchField}
            type="search"
            name="searchString"
            placeholder="Enter name you character"
            onChange={this.props.onChange}
            onKeyPress={this.props.onKeyPress}
            value={this.props.value}
          />
        </label>
      </form>
    );
  }
}
