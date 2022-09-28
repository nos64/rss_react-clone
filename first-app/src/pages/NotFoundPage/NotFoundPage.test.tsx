import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('render NotFoundPage component', () => {
    render(<NotFoundPage />);
    // screen.debug();
    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
  });
});
