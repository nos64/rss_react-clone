import { Component } from 'react';
import style from './Footer.module.css';
import { ReactComponent as RSLogo } from '../../assets/images/rs_school_js.svg';
import React from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className={style.footer}>
        <a
          className={style.footer__link}
          href="https://rs.school/react/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={style.footer__logo}>
            <RSLogo />
          </div>
        </a>
        <a
          className={style.footer__link}
          href="https://github.com/nos64"
          target="_blank"
          rel="noreferrer"
        >
          nos64
        </a>
      </footer>
    );
  }
}
