import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import userEvent from '@testing-library/user-event';

describe('Footer', () => {
  it('render Footer component', () => {
    render(<Footer />);
    // screen.debug();
    expect(screen.getByText(/2022/i)).toBeInTheDocument();
  });

  it('click git link', async () => {
    const user = userEvent.setup();
    render(<Footer />);
    await user.click(screen.getByText(/nos64/i));
    expect(screen.getByText(/nos64/i)).toBeInTheDocument();
  });
});