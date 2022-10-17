import React from 'react';
import { render, screen } from '@testing-library/react';
import APIPage from './APIPage';

describe('APIPage', () => {
  it('render FormPage component', async () => {
    render(<APIPage />);
    await expect(screen.getByText(/Loading..</i)).toBeInTheDocument();
  });
});
