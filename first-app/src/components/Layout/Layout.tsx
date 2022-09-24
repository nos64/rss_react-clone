import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import style from './Layout.module.scss';

export default class Layout extends Component {
  render() {
    return (
      <div className={style.layout}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  }
}
