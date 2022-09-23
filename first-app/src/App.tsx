import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { ROUTES } from 'variables/routes';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path={ROUTES.HOMEPAGE} element={<HomePage />} />;
        <Route path={ROUTES.ABOUTUS} element={<AboutUsPage />} />;
        <Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />;
      </Routes>
    );
  }
}

export default App;
