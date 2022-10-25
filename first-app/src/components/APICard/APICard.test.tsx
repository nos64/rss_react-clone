import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import APICard from './APICard';
import { ICharacter } from 'components/APIComponent/APIComponent';

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
];

interface IAPICard extends ICharacter {
  isModalActive: boolean;
  activeItem: null | ICharacter;
  onClick: () => void;
}

describe('APICard', () => {
  it('fetchData', async () => {
    global.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ items: { cards } }),
      })
    );
    const handleClick = () => console.log('card', cards);
    render(
      <APICard
        key={cards[0].id}
        id={cards[0].id}
        name={cards[0].name}
        image={cards[0].image}
        status={cards[0].status}
        gender={cards[0].gender}
        species={cards[0].species}
        origin={cards[0].origin}
        location={cards[0].location}
        type={cards[0].type}
        episode={cards[0].episode}
        created={cards[0].created}
        url={cards[0].url}
        isModalActive={true}
        activeItem={null}
        onClick={() => handleClick()}
      />
    );
    screen.debug();
    expect(await screen.findByText(/Adjudicator Rick/i)).toBeInTheDocument();
  });
});
