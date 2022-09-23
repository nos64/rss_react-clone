import Header from 'components/Header/Header';
import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';
import { Component } from 'react';
import style from './HomePage.module.css';

export default class HomePAge extends Component {
  render() {
    return (
      <>
        <Header />
        <h1 className={style.title}>Homepage</h1>
        <SearchBar />
      </>
    );
  }
}
