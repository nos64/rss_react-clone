import React from 'react';
import { render, screen } from '@testing-library/react';
import APIPage from './APIPage';

describe('APIPage', () => {
  it('render FormPage component', () => {
    render(<APIPage />);
    expect(screen.getByTestId(/api-title/i)).toBeInTheDocument();
  });
});
