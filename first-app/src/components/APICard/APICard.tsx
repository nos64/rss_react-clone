import CardSimpleText from 'components/CardSimpleText';
import React from 'react';
import { ICharacter } from 'types/types';
import { cardDescription } from 'utils/constants';
import style from './APICard.module.scss';

const APICard: React.FC<ICharacter> = (props) => {
  return (
    <li className={style.card}>
      <h3 className={style.card__title}>{props.name}</h3>
      <div className={style.card__imageWrapper}>
        <img className={style.card__image} src={`${props.image}`} alt={`Image ${props.name}`} />
      </div>
      <div>
        <CardSimpleText description={cardDescription.status} param={props.status} />
        <CardSimpleText description={cardDescription.species} param={props.species} />
        <CardSimpleText description={cardDescription.gender} param={props.gender} />
        <CardSimpleText description={cardDescription.origin} param={props.origin.name} />
        <CardSimpleText description={cardDescription.location} param={props.location.name} />
      </div>
    </li>
  );
};

export default APICard;
