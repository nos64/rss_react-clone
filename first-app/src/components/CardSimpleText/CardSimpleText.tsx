import React from 'react';
import style from './CardSimpleText.module.scss';

interface ICardSimpleTextProps {
  description: string;
  param: string;
}

const CardSimpleText = (props: ICardSimpleTextProps) => {
  return (
    <p className={style.card__description}>
      {props.description} <span className={style.card__param}>{props.param}</span>
    </p>
  );
};

export default CardSimpleText;
