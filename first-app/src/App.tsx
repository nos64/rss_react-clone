import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import style from './App.module.scss';
import Footer from 'components/Footer';

export default class App extends Component {
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
