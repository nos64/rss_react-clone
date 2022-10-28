// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import APIComponent from './APIComponent';

// const cards = [
//   {
//     id: 8,
//     name: 'Adjudicator Rick',
//     status: 'Dead',
//     species: 'Human',
//     type: '',
//     gender: 'Male',
//     origin: {
//       name: 'unknown',
//       url: '',
//     },
//     location: {
//       name: 'Citadel of Ricks',
//       url: 'https://rickandmortyapi.com/api/location/3',
//     },
//     image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
//     episode: ['https://rickandmortyapi.com/api/episode/28'],
//     url: 'https://rickandmortyapi.com/api/character/8',
//     created: '2017-11-04T20:03:34.737Z',
//   },
//   {
//     id: 9,
//     name: 'Agency Director',
//     status: 'Dead',
//     species: 'Human',
//     type: '',
//     gender: 'Male',
//     origin: {
//       name: 'Earth (Replacement Dimension)',
//       url: 'https://rickandmortyapi.com/api/location/20',
//     },
//     location: {
//       name: 'Earth (Replacement Dimension)',
//       url: 'https://rickandmortyapi.com/api/location/20',
//     },
//     image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
//     episode: ['https://rickandmortyapi.com/api/episode/24'],
//     url: 'https://rickandmortyapi.com/api/character/9',
//     created: '2017-11-04T20:06:54.976Z',
//   },
// ];

// describe('APIComponent', () => {
//   it('fetchData', async () => {
//     global.fetch = jest.fn().mockImplementationOnce(() =>
//       Promise.resolve({
//         json: () => Promise.resolve({ items: { cards } }),
//       })
//     );
//     render(<APIComponent />);
//     expect(
//       await screen.findByText(/Sorry, your character not found, please try again or press/i)
//     ).toBeInTheDocument();
//   });
// });
