import APIComponent from 'components/APIComponent';
import Container from 'components/Container';
import React, { Component } from 'react';

interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export default class APIPage extends Component {
  render() {
    return (
      <Container>
        <APIComponent />
      </Container>
    );
  }
}
