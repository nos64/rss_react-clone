import React, { Component } from 'react';
import style from './CardList.module.scss';
import { cardDB } from '../../variables/cardDB';
import Card from '../Card';

export default class CardList extends Component {
  render() {
    return (
      <ul className={style.card__list}>
        {cardDB.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            brand={card.brand}
            model={card.model}
            year={card.year}
            color={card.color}
            doors={card.doors}
            volume={card.volume}
            owners={card.owners}
          />
        ))}
      </ul>
    );
  }
}
