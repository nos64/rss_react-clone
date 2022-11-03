import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter, Navigate, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import AboutUsPage from 'pages/AboutUsPage/AboutUsPage';
import HomePage from 'pages/HomePage/HomePage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { ROUTES } from 'variables/routes';
import API from 'pages/APIPage';
import FormPage from 'pages/FormPage';

describe('App', () => {
  it('render App component', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // screen.debug();
    expect(screen.queryByText(/API/i)).toBeInTheDocument();
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
  });

  it('click buttons', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    await user.click(screen.getByText(/about/i));
    expect(screen.getByText(/about/i)).toBeInTheDocument();

    await user.click(screen.getByText(/API/i));
    expect(screen.getByText(/API/i)).toBeInTheDocument();
  });

  it('page not found', () => {
    render(
      <MemoryRouter initialEntries={['/uncorrectedLink']}>
        <Routes>
          <Route path={ROUTES.LAYOUT} element={<App />}>
            <Route path={ROUTES.HOME} element={<API />} />;
            <Route path={ROUTES.ABOUT_US} element={<AboutUsPage />} />;
            <Route path={ROUTES.FORM} element={<FormPage />} />;
            <Route path={ROUTES.FIRST_PAGE} element={<HomePage />} />;
            <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />;
            <Route path={ROUTES.REDIRECT} element={<Navigate to={ROUTES.NOT_FOUND} />} />;
          </Route>
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
