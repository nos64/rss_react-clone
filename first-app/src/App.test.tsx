import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter, Navigate, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import AboutUsPage from './pages/AboutUsPage';
import API from './pages/APIPage';
import FormPage from './pages/FormPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/';
import { ROUTES } from './variables/routes';

describe('App', () => {
  it('render App component', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(await screen.findByText(/API/i)).toBeInTheDocument();
    expect(await screen.findByText(/About us/i)).toBeInTheDocument();
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

    await user.click(screen.getByText(/First Page/i));
    expect(screen.getByText(/First/i)).toBeInTheDocument();
  });

  it('page not found', () => {
    render(
      <MemoryRouter initialEntries={['/uncorrectedLink']}>
        <Routes>
          <Route path={ROUTES.LAYOUT} element={<App />}>
            <Route path={ROUTES.HOME} element={<API />} />;
            <Route path={ROUTES.ABOUTUS} element={<AboutUsPage />} />;
            <Route path={ROUTES.FORM} element={<FormPage />} />;
            <Route path={ROUTES.FIRSTPAGE} element={<HomePage />} />;
            <Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />;
            <Route path={ROUTES.REDIRECT} element={<Navigate to={ROUTES.NOTFOUND} />} />;
          </Route>
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
