import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Router } from 'react-router-dom';

describe('App', () => {
  it('render App component', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    // expect(screen.getByRole('list')).toBeInTheDocument();
    screen.getAllByRole('');
  });
});
