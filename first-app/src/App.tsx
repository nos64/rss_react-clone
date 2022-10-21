import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import style from './App.module.scss';
import Footer from 'components/Footer';

const App = () => {
  return (
    <div className={style.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
