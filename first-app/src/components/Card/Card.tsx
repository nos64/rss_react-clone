import React from 'react';
import { Component } from 'react';
import { ICard } from 'types/types';
import style from './Card.module.scss';

export default class Card extends Component<ICard> {
  constructor(props: ICard) {
    super(props);
  }

  render() {
    return (
      <div className={style.card}>
        <h3 className={style.card__title}>{this.props.brand}</h3>
        <p className={style.card__subtitle}>{this.props.model}</p>
        <div className={style.card__imageWrapper}>
          <img
            className={style.card__image}
            src={`${this.props.image}`}
            alt={`Image ${this.props.brand} ${this.props.model}`}
          />
        </div>
        <div>
          <p className={style.card__description}>
            Год выпуска: <span className={style.card__year}>{this.props.year}</span>
          </p>
          <p className={style.card__description}>
            Цвет: <span className={style.card__color}>{this.props.color}</span>
          </p>
          <p className={style.card__description}>
            Количество дверей: <span className={style.card__door}>{this.props.doors}</span>
          </p>
          <p className={style.card__description}>
            Мощность двигателя: <span className={style.card__volume}>{this.props.volume}</span>
          </p>
          <p className={style.card__description}>
            Количество собственников:{' '}
            <span className={style.card__owners}>{this.props.owners}</span>
          </p>
        </div>
      </div>
    );
  }
}
