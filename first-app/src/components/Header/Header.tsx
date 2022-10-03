import { Component } from 'react';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import Container from 'components/Container';

export default class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        <Container>
          <ul className={style.link__list}>
            <li className={style.link__item}>
              <Link className={style.link} to="/">
                Homepage
              </Link>
            </li>
            <li className={style.link__item}>
              <Link className={style.link} to="/about">
                About Us
              </Link>
            </li>
          </ul>
        </Container>
      </header>
    );
  }
}
