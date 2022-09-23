import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchString: '',
  };

  componentDidMount() {
    const searchString = localStorage.getItem('searchString')
      ? localStorage.getItem('searchString')
      : '';
    this.setState({ searchString });
  }

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
          <input name="searchString" value={this.state.searchString} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}

export default SearchBar;
