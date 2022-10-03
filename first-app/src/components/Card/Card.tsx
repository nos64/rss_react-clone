import React from 'react';
import { Component } from 'react';
import { ICard } from 'types/types';
import style from './Card.module.scss';

export default class Card extends Component<ICard> {
  render() {
    return (
      <li className={style.card}>
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
            Год выпуска: <span className={style.card__param}>{this.props.year}</span>
          </p>
          <p className={style.card__description}>
            Цвет: <span className={style.card__param}>{this.props.color}</span>
          </p>
          <p className={style.card__description}>
            Количество дверей: <span className={style.card__param}>{this.props.doors}</span>
          </p>
          <p className={style.card__description}>
            Мощность двигателя: <span className={style.card__param}>{this.props.volume}</span>
          </p>
          <p className={style.card__description}>
            Количество собственников: <span className={style.card__param}>{this.props.owners}</span>
          </p>
        </div>
      </li>
    );
  }
}
