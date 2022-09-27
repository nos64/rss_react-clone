import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('render Card component', () => {
    render(
      <Card
        id={''}
        image={''}
        brand={''}
        model={''}
        year={''}
        color={''}
        colorID={''}
        favorite={false}
        doors={''}
        volume={''}
        owners={''}
      />
    );
    screen.debug();
    expect(screen.getByText(/Год выпуска/i)).toBeInTheDocument();
  });
});
