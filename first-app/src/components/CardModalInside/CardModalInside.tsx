import { ICard } from 'components/Card/Card';
import CardSimpleText from 'components/CardSimpleText';
import React from 'react';
import style from './CardModalInside.module.scss';

interface ICardModalInsideProps {
  activeItem: ICard;
}

const CardModalInside = (props: ICardModalInsideProps) => {
  return (
    <>
      <div className={style.card__imageWrapper}>
        <img
          className={style.card__image}
          src={`${props.activeItem.image}`}
          alt={`Image ${props.activeItem.brand} ${props.activeItem.model}`}
        />
      </div>
      <div>
        <h3 className={style.card__title}>{props.activeItem.brand}</h3>
        <CardSimpleText description={'Год выпуска: '} param={props.activeItem.year} />
        <CardSimpleText description={'Цвет: '} param={props.activeItem.color} />
        <CardSimpleText description={'Количество дверей: '} param={props.activeItem.doors} />
        <CardSimpleText description={'Мощность двигателя: '} param={props.activeItem.volume} />
        <CardSimpleText
          description={'Количество собственников: '}
          param={props.activeItem.owners}
        />
      </div>
    </>
  );
};

export default CardModalInside;
