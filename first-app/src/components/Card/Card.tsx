import React, { Component } from 'react';
import style from './Card.module.scss';
import CardSimpleText from '../CardSimpleText';

export interface ICard {
  image: string;
  brand: string;
  model: string;
  year: string;
  color: string;
  doors: string;
  volume: string;
  owners: string;
  inBasket?: boolean;
}
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
          <CardSimpleText description={'Год выпуска: '} param={this.props.year} />
          <CardSimpleText description={'Цвет: '} param={this.props.color} />
          <CardSimpleText description={'Количество дверей: '} param={this.props.doors} />
          <CardSimpleText description={'Мощность двигателя: '} param={this.props.volume} />
          <CardSimpleText description={'Количество собственников: '} param={this.props.owners} />
        </div>
      </li>
    );
  }
}
