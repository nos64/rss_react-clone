import { Component } from 'react';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import React from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className={style.header}>
        <ul className={style.link__list}>
          <li className={style.link__item}>
            <Link to="/">Homepage</Link>
          </li>
          <li className={style.link__item}>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>
    );
  }
}
