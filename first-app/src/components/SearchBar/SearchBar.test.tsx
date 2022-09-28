import React from 'react';
import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import SearchBar from './SearchBar';
import userEvent from '@testing-library/user-event';
import App from 'App';
import AboutUsPage from 'pages/AboutUsPage/AboutUsPage';
import HomePage from 'pages/HomePage/HomePage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { MemoryRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from 'variables/routes';

describe('SearchBar', () => {
  it('render SearchBar component', () => {
    render(<SearchBar />);
    // screen.debug();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your text here/i)).toBeInTheDocument();
    // expect(screen.getByRole('')).toBeInTheDocument();
  });

  it('placeholder', () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText(/Enter your text here/i)).toContainHTML('');
  });

  it('Search button', () => {
    render(<SearchBar />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button'));
    expect(jest.fn()).toHaveBeenCalledTimes(0);
  });

  it('show value in searchBar', async () => {
    const localStorage = new LocalStorageMock();
    const user = userEvent.setup();
    render(<SearchBar />);
    await user.type(screen.getByPlaceholderText(/Enter your text here/i), 'someText');
    render(
      <MemoryRouter>
        <Routes>
          <Route path={ROUTES.LAYOUT} element={<App />}>
            <Route path={ROUTES.HOMEPAGE} element={<HomePage />} />;
            <Route path={ROUTES.ABOUTUS} element={<AboutUsPage />} />;
            <Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />;
            <Route path={ROUTES.REDIRECT} element={<Navigate to={ROUTES.NOTFOUND} />} />;
          </Route>
        </Routes>
      </MemoryRouter>
    );
    await user.click(screen.getByText(/about/i));
    expect(screen.getByText(/Nosov/i)).toBeInTheDocument();

    await user.click(screen.getByText(/Homepage/i));
    expect(screen.getAllByText(/Homepage/i)[1] as HTMLAnchorElement).toBeInTheDocument();

    render(<SearchBar />);
    expect(screen.getByDisplayValue('someText')).toBeInTheDocument();
  });
});

//Взято отсюда https://dev.to/shinshin86/a-mock-of-localstorage-written-in-typescript-2680
// https://robertmarshall.dev/blog/how-to-mock-local-storage-in-jest-tests/
type Store = {
  [key: string]: string;
};

class LocalStorageMock {
  store: Store;
  length: number;

  constructor() {
    this.store = {};
    this.length = 0;
  }

  key(n: number): string | null {
    if (typeof n === 'undefined') {
      throw new Error(
        "Uncaught TypeError: Failed to execute 'key' on 'Storage': 1 argument required, but only 0 present."
      );
    }

    if (n >= Object.keys(this.store).length) {
      return null;
    }
    return Object.keys(this.store)[n];
  }

  getItem(key: string) {
    if (!Object.keys(this.store).includes(key)) {
      return null;
    }
    return this.store[key];
  }

  setItem(key: string, value: string): undefined {
    if (typeof key === 'undefined' && typeof value === 'undefined') {
      throw new Error(
        "Uncaught TypeError: Failed to execute 'setItem' on 'Storage': 2 arguments required, but only 0 present."
      );
    }
    if (typeof value === 'undefined') {
      throw new Error(
        "Uncaught TypeError: Failed to execute 'setItem' on 'Storage': 2 arguments required, but only 1 present."
      );
    }
    if (!key) return undefined;
    this.store[key] = value.toString() || '';
    this.length = Object.keys(this.store).length;
    return undefined;
  }

  removeItem(key: string): undefined {
    if (typeof key === 'undefined') {
      throw new Error(
        "Uncaught TypeError: Failed to execute 'removeItem' on 'Storage': 1 argument required, but only 0 present."
      );
    }
    delete this.store[key];
    this.length = Object.keys(this.store).length;
    return undefined;
  }

  clear(): undefined {
    this.store = {};
    this.length = 0;

    return undefined;
  }
}
// return new LocalStorageMock();
