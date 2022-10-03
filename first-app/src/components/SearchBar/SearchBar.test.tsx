import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import userEvent from '@testing-library/user-event';

describe('SearchBar', () => {
  it('render SearchBar component', () => {
    render(<SearchBar />);
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your text here/i)).toBeInTheDocument();
  });

  it('placeholder', () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText(/Enter your text here/i)).toContainHTML('');
  });

  it('Search button', () => {
    render(<SearchBar />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button'));
    expect(jest.fn()).toHaveBeenCalledTimes(0);
  });
});
