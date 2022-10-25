import React from 'react';
import { render, screen } from '@testing-library/react';
import APISearchBar from './APISearchBar';
import userEvent from '@testing-library/user-event';

describe('localStorage', () => {
  it('show value in searchBar', async () => {
    const localStorage = new LocalStorageMock();
    const user = userEvent.setup();
    localStorage.clear();
    localStorage.removeItem('searchString');
    const { rerender } = render(
      <APISearchBar
        value={''}
        onChange={function (): void {
          throw new Error('Function not implemented.');
        }}
        onKeyPress={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    user.type(await screen.findByPlaceholderText(/Enter name you character/i), 'someText12345');
    localStorage.setItem('searchString', 'someText12345');

    rerender(
      <APISearchBar
        value={localStorage.getItem('searchString') as string}
        onChange={function (): void {}}
        onKeyPress={function (): void {}}
      />
    );
    localStorage.getItem('searchString');
    expect(await screen.findByDisplayValue(/someText12345/i)).toBeInTheDocument();
  });
});

//Взято отсюда https://dev.to/shinshin86/a-mock-of-localstorage-written-in-typescript-2680
// https://robertmarshall.dev/blog/how-to-mock-local-storage-in-jest-tests/
type Store = {
  [key: string]: string;
};

class LocalStorageMock {
  store: Store;
  length: number;

  constructor() {
    this.store = {};
    this.length = 0;
  }

  key(n: number): string | null {
    if (typeof n === 'undefined') {
      throw new Error(
        "Uncaught TypeError: Failed to execute 'key' on 'Storage': 1 argument required, but only 0 present."
      );
    }

    if (n >= Object.keys(this.store).length) {
      return null;
    }
    return Object.keys(this.store)[n];
  }

  getItem(key: string) {
    if (!Object.keys(this.store).includes(key)) {
      return null;
    }
    return this.store[key];
  }

  setItem(key: string, value: string): undefined {
    if (typeof key === 'undefined' && typeof value === 'undefined') {
      throw new Error(
        "Uncaught TypeError: Failed to execute 'setItem' on 'Storage': 2 arguments required, but only 0 present."
      );
    }
    if (typeof value === 'undefined') {
      throw new Error(
        "Uncaught TypeError: Failed to execute 'setItem' on 'Storage': 2 arguments required, but only 1 present."
      );
    }
    if (!key) return undefined;
    this.store[key] = value.toString() || '';
    this.length = Object.keys(this.store).length;
    return undefined;
  }

  removeItem(key: string): undefined {
    if (typeof key === 'undefined') {
      throw new Error(
        "Uncaught TypeError: Failed to execute 'removeItem' on 'Storage': 1 argument required, but only 0 present."
      );
    }
    delete this.store[key];
    this.length = Object.keys(this.store).length;
    return undefined;
  }

  clear(): undefined {
    this.store = {};
    this.length = 0;

    return undefined;
  }
}
