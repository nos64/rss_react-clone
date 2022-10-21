import React from 'react';
import { Component } from 'react';
import { ICard } from 'types/types';
import style from './Card.module.scss';
import CardSimpleText from '../CardSimpleText';

const Card = (props: ICard) => {
  return (
    <li className={style.card}>
      <h3 className={style.card__title}>{props.brand}</h3>
      <p className={style.card__subtitle}>{props.model}</p>
      <div className={style.card__imageWrapper}>
        <img
          className={style.card__image}
          src={`${props.image}`}
          alt={`Image ${props.brand} ${props.model}`}
        />
      </div>
      <div>
        <CardSimpleText description={'Год выпуска: '} param={props.year} />
        <CardSimpleText description={'Цвет: '} param={props.color} />
        <CardSimpleText description={'Количество дверей: '} param={props.doors} />
        <CardSimpleText description={'Мощность двигателя: '} param={props.volume} />
        <CardSimpleText description={'Количество собственников: '} param={props.owners} />
      </div>
    </li>
  );
};

export default Card;
