import CardList from 'components/CardList/CardList';
import Container from 'components/Container/Container';
import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';
import { Component } from 'react';
import style from './HomePage.module.scss';

export default class HomePage extends Component {
  render() {
    return (
      <main>
        <Container>
          <h1 className={style.title}>Homepage</h1>
          <SearchBar />
          <CardList />
        </Container>
      </main>
    );
  }
}
