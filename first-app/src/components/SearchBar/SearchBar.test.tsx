import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('render SearchBar component', () => {
    render(<SearchBar />);
    screen.debug();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your text here/i)).toBeInTheDocument();
    // expect(screen.getByRole('')).toBeInTheDocument();
  });

});
