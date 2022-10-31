import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import style from './App.module.scss';
import Footer from 'components/Footer';
import { GlobalProvider } from './contexts/GlobalContext';

const App = () => {
  return (
    <div className={style.layout}>
      <GlobalProvider>
        <Header />
        <Outlet />
        <Footer />
      </GlobalProvider>
    </div>
  );
};

export default App;
