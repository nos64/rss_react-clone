import Container from 'components/Container/Container';
import React from 'react';
import { Component } from 'react';
import style from './AboutUsPage.module.scss';
export default class AboutUsPage extends Component {
  render() {
    return (
      <>
        <Container>
          <div className={style.aboutUs}>
            <h1 className={style.title}>About us</h1>
            <div className={style.contacts}>
              <p className={style.description}>
                Created <span className={style.name}>Mikhail Nosov</span>
              </p>
            </div>
          </div>
        </Container>
      </>
    );
  }
}
