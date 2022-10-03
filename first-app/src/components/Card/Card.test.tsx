import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('render Card component', () => {
    render(
      <Card
        image={''}
        brand={''}
        model={''}
        year={''}
        color={''}
        doors={''}
        volume={''}
        owners={''}
      />
    );
    expect(screen.getByText(/Год выпуска/i)).toBeInTheDocument();
  });
});
