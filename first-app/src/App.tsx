import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import style from './App.module.scss';
import Footer from 'components/Footer';
import { APIProvider } from './contexts/APIContext';

const App = () => {
  return (
    <div className={style.layout}>
      <APIProvider>
        <Header />
        <Outlet />
        <Footer />
      </APIProvider>
    </div>
  );
};

export default App;
