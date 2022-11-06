import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AboutUsPage from 'pages/AboutUsPage';
import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
import { ROUTES } from 'variables/routes';
import FormPage from 'pages/FormPage';
import API from 'pages/APIPage';
import APICardDetailsPage from './pages/APICardDetailsPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LAYOUT} element={<App />}>
          <Route path={ROUTES.HOME} element={<API />} />;
          <Route path={ROUTES.API_CARD_DETAIL} element={<APICardDetailsPage />} />;
          <Route path={ROUTES.ABOUT_US} element={<AboutUsPage />} />;
          <Route path={ROUTES.FORM} element={<FormPage />} />;
          <Route path={ROUTES.FIRST_PAGE} element={<HomePage />} />;
          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />;
          <Route path={ROUTES.REDIRECT} element={<Navigate to={ROUTES.NOT_FOUND} />} />;
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
