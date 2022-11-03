import React from 'react';
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
export interface ICardModal extends ICard {
  isModalActive: boolean;
  activeItem: null | ICard;
  onCardClick: () => void;
}
const Card = (props: ICardModal) => {
  return (
    <li className={style.card} onClick={() => props.onCardClick()}>
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
