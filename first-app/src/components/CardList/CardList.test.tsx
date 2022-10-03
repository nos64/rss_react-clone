import React from 'react';
import { render, screen } from '@testing-library/react';
import CardList from './CardList';

describe('CardList', () => {
  it('render CardList component', () => {
    render(<CardList />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
