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
});
