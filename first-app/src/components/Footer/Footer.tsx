import React, { Component } from 'react';
import style from './Footer.module.scss';
import rsLogo from '../../assets/images/rs_school_js.svg';
import Container from '../Container';

export default class Footer extends Component {
  render() {
    return (
      <footer className={style.footer}>
        <Container>
          <ul className={style.linkList}>
            <li className={style.linkItem}>
              <a
                className={style.link}
                href="https://rs.school/react/"
                target="_blank"
                rel="noreferrer"
              >
                <div className={style.logo}>
                  <img src={rsLogo} alt="School Logo" />
                </div>
              </a>
            </li>
            <li className={style.linkItem}>
              <span>© 2022</span>
            </li>
            <li className={style.linkItem}>
              <a
                className={style.link}
                href="https://github.com/nos64"
                target="_blank"
                rel="noreferrer"
              >
                nos64
              </a>
            </li>
          </ul>
        </Container>
      </footer>
    );
  }
}
