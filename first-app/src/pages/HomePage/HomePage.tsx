import CardList from 'components/CardList';
import Container from 'components/Container';
import SearchBar from 'components/SearchBar';
import React from 'react';
import style from './HomePage.module.scss';

const HomePage = () => {
  return (
    <main>
      <Container>
        <h1 className={style.title}> My first page</h1>
        <SearchBar />
        <CardList />
      </Container>
    </main>
  );
};

export default HomePage;
