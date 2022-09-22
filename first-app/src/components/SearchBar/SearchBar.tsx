import React from 'react';

class SearchBar extends React.Component {
  constructor(props: string) {
    super(props);
    this.state = '';
  }

  componentDidMount() {
    localStorage.getItem('value');
  }

  componentWillMount() {
    // localStorage.setItem('value', this.setState);
  }
  render() {
    return (
      <input type="search" placeholder="Enter your text here">
        {/* {this.state} */}
      </input>
    );
  }
}

export default SearchBar;
