import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AboutUsPage from 'pages/AboutUsPage/AboutUsPage';
import HomePage from 'pages/HomePage/HomePage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { ROUTES } from 'variables/routes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LAYOUT} element={<App />}>
          <Route path={ROUTES.HOMEPAGE} element={<HomePage />} />;
          <Route path={ROUTES.ABOUTUS} element={<AboutUsPage />} />;
          <Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />;
          <Route path={ROUTES.REDIRECT} element={<Navigate to={ROUTES.NOTFOUND} />} />;
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
