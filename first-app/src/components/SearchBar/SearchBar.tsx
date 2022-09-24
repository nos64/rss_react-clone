import React, { Component } from 'react';
import style from './SearchBar.module.scss';

export default class SearchBar extends Component {
  state = {
    searchString: '',
  };

  componentDidMount() {
    const searchString = localStorage.getItem('searchString')
      ? localStorage.getItem('searchString')
      : '';
    this.setState({ searchString });
  }

  // componentWillUnmount() {
  //   localStorage.setItem('searchString', this.state.searchString);
  // }

  handleChange = (event: React.SyntheticEvent): void => {
    const input = event.target;
    if (input && input instanceof HTMLInputElement) {
      this.setState({ searchString: input.value });
      localStorage.setItem('searchString', input.value);
    }
  };

  render() {
    return (
      <form>
        <label>
          Search:
          <input
            type="search"
            name="searchString"
            value={this.state.searchString}
            onChange={this.handleChange}
            placeholder="Enter your text here"
          />
        </label>
        <button type="button">Search</button>
      </form>
    );
  }
}
