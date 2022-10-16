import React, { Component } from 'react';
import style from './APISearchBar.module.scss';

// value={this.state.searchQuery}
// onChange={this.handleInputChange}
// onKeyPress={this.getSearch}

type SearchProps = {
  value?: string;
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
      searchString: '',
    };
  }

  componentDidMount() {
    this.setState({ searchString: localStorage.getItem('searchString') || '' });
  }

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
            placeholder="Enter your text here"
            onChange={(this.props.onChange, this.handleChange)}
            onKeyPress={this.props.onKeyPress}
            value={(this.props.value, this.state.searchString)}
          />
        </label>
      </form>
    );
  }
}
