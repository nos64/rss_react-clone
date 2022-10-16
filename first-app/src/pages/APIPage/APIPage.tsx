import APIComponent from 'components/APIComponent';
import Container from 'components/Container';
import SearchBar from 'components/SearchBar';
import React, { Component } from 'react';

export default class API extends Component {
  render() {
    return (
      <Container>
        <SearchBar />
        <APIComponent />
      </Container>
    );
  }
}
