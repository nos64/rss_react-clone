import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUsPage from './AboutUsPage';

describe('AboutUsPage', () => {
  it('render AboutUsPage component', () => {
    render(<AboutUsPage />);
    expect(screen.getByText(/Mikhail Nosov/i)).toBeInTheDocument();
  });
});
