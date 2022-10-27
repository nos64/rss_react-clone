import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  it('render Header component', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    // screen.debug();
    const apiLink = screen.getByText(/API/i);
    expect(apiLink).toBeInTheDocument();
    userEvent.click(apiLink);
    expect(screen.getByText(/API/i)).toBeInTheDocument();

    const aboutusLink = screen.getByText(/About us/i);
    expect(aboutusLink).toBeInTheDocument();
    userEvent.click(aboutusLink);
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
  });
});
