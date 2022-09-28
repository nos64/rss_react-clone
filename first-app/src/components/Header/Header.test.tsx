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
    screen.debug();
    const homepageLink = screen.getByText(/Homepage/i);
    expect(homepageLink).toBeInTheDocument();
    userEvent.click(homepageLink);
    expect(screen.getByText(/Homepage/i)).toBeInTheDocument();

    const aboutusLink = screen.getByText(/About us/i);
    expect(aboutusLink).toBeInTheDocument();
    userEvent.click(aboutusLink);
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
  });
});
