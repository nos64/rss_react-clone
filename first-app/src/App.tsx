import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import style from './App.module.scss';
import Footer from 'components/Footer';
import { GlobalProvider } from './contexts/GlobalContext';

export default class App extends Component {
  render() {
    return (
      <div className={style.layout}>
        <GlobalProvider>
          <Header />
          <Outlet />
          <Footer />
        </GlobalProvider>
      </div>
    );
  }
}
