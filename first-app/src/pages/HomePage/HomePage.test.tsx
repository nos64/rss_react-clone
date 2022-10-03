import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('render HomePage component', () => {
    render(<HomePage />);
    expect(screen.getByText(/HomePage/i)).toBeInTheDocument();
  });
});
