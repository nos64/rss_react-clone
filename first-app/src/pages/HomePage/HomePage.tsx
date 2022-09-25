import CardList from 'components/CardList/CardList';
import Container from 'components/Container/Container';
import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';
import { Component } from 'react';
import style from './HomePage.module.scss';

export default class HomePAge extends Component {
  render() {
    return (
      <>
        <Container>
          <h1 className={style.title}>Homepage</h1>
          <SearchBar />
          <CardList />
        </Container>
      </>
    );
  }
}
