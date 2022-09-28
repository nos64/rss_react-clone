import Container from 'components/Container/Container';
import React from 'react';
import { Component } from 'react';
import style from './NotFoundPage.module.scss';
export default class NotFoundPage extends Component {
  render() {
    return (
      <main>
        <Container>
          <h1 className={style.title}>404</h1>
          <p className={style.description}> Sorry, Page Not Found</p>
        </Container>
      </main>
    );
  }
}
