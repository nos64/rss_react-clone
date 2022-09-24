import React from 'react';
import { Component } from 'react';
import { ICard } from 'types/types';
import style from './CardList.module.scss';
import { cardDB } from '../../variables/cardDB';
import Card from 'components/Card/Card';

export default class CardList extends Component {
  constructor(props: ICard[]) {
    super(props);
  }
  cards = (
    <ul className={style.card__list}>
      {cardDB.map((card) => (
        <li key={card.id}>
          <Card
            id={''}
            image={card.image}
            brand={card.brand}
            model={card.model}
            year={card.year}
            color={card.color}
            colorID={''}
            favorite={false}
            doors={card.doors}
            volume={card.volume}
            owners={card.owners}
          />
        </li>
      ))}
    </ul>
  );
  render() {
    return <>{this.cards}</>;
  }
}
