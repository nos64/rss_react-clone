import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import APIComponent from './APIComponent';

test('loads and displays APIComponent', async () => {});

const server = setupServer(
  rest.get('/greeting', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'hello there' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('handles server error', async () => {
  server.use(
    rest.get('/greeting', (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(<APIComponent url="/greeting" />);
  fireEvent.click(screen.getByText('Load Greeting'));
  await waitFor(() =>
  screen.getByRole('heading'),
  expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!');
  expect(screen.getByRole('button')).not.toBeDisabled()
});

const cards = [
  {
    id: 8,
    name: 'Adjudicator Rick',
    status: 'Dead',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'unknown',
      url: '',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/28'],
    url: 'https://rickandmortyapi.com/api/character/8',
    created: '2017-11-04T20:03:34.737Z',
  },
  {
    id: 9,
    name: 'Agency Director',
    status: 'Dead',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/24'],
    url: 'https://rickandmortyapi.com/api/character/9',
    created: '2017-11-04T20:06:54.976Z',
  },
];

// describe('APIComponent', () => {
//   it('APIComponent', async () => {
//     global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({ data: { cards } }));
//     render(<APIComponent />);
//     screen.debug();
//     expect(await screen.findByText(/Agency Director/i)).toBeInTheDocument();
//   });
// });
