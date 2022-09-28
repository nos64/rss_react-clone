import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import userEvent from '@testing-library/user-event';

describe('Footer', () => {
  it('render CardList component', () => {
    render(<Footer />);
    // screen.debug();
    expect(screen.getByText(/2022/i)).toBeInTheDocument();
    // expect(screen.getByRole('link').hasAttribute('https://rs.school/react/'));
    // expect(screen.getByRole('link').hasAttribute('https://github.com/nos64'));
    // expect(screen.getByRole('link').closest('a')?.href).toEqual('https://rs.school/react/');
    // const gitLink = screen.getByText(/nos64/i);
    // const rssLink = screen.getByRole('link').toHaveAttribute('href', 'https://rs.school/react/');

    // userEvent.click(gitLink);
    // expect(screen.getByText(/MIKHAIL NOSOV/i)).toBeInTheDocument();

    // userEvent.click(rssLink);
    // expect(screen.getByText(/MIKHAIL NOSOV/i)).toBeInTheDocument();
  });
});
