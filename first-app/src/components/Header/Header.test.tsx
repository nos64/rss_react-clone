import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  it('render Header component', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const formLink = screen.findByText(/Form/i);
    expect(await formLink).toBeInTheDocument();
    userEvent.click(await screen.findByText(/Form/i));
    expect(await screen.findByText(/Form/i)).toBeInTheDocument();

    const aboutusLink = screen.getByText(/About us/i);
    expect(aboutusLink).toBeInTheDocument();
    userEvent.click(aboutusLink);
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
  });
});
