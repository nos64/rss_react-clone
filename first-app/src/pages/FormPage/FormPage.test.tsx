import React from 'react';
import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';

describe('FormPage', () => {
  it('render FormPage component', () => {
    render(<FormPage />);
    expect(screen.getByText(/Registration form/i)).toBeInTheDocument();
  });
});
