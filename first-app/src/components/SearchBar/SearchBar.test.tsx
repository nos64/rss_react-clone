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

const localStorageMock = (function () {
  let store = { key };

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key: string) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

const setLocalStorage = (id: string, data: string) => {
  window.localStorage.setItem(id, JSON.stringify(data));
};

describe('Set local storage item', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test('data is added into local storage', () => {
    const mockId = '111';
    const mockJson = { data: 'json data' };
    setLocalStorage(mockId, mockJson);
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
  });

  test('data in local storage which is overwritten', () => {
    const mockId = '222';
    const mockOldData = { data: 'json data' };
    const mockNewData = { data: ' new data' };

    window.localStorage.setItem(mockId, JSON.stringify(mockOldData));
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockOldData));

    setLocalStorage(mockId, mockNewData);
    window.localStorage.setItem(mockId, JSON.stringify(mockNewData));
  });

  test('only one ID is in localStorage', () => {
    const mockId = '333';
    const mockOldData = { data: 'json data' };
    const mockNewData = { data: ' new data' };

    window.localStorage.setItem(mockId, JSON.stringify(mockOldData));
    setLocalStorage(mockId, mockNewData);

    const allItems = window.localStorage.getAll();

    expect(Object.keys(allItems).length).toBe(1);
  });
});
