import CardSimpleText from 'components/CardSimpleText';
import React from 'react';
import { ICharacter } from '../APIComponent/APIComponent';
import style from './APIModalInside.module.scss';

interface IProps {
  activeCard: ICharacter;
}

const APICard = (props: IProps) => {
  return (
    <>
      <div className={style.card__imageWrapper}>
        <img
          className={style.card__image}
          src={`${props.activeCard.image}`}
          alt={`Image ${props.activeCard.name}`}
        />
      </div>
      <div>
        <h3 className={style.card__title}>{props.activeCard.name}</h3>
        <CardSimpleText description={'Status: '} param={props.activeCard.status} />
        <CardSimpleText description={'Species: '} param={props.activeCard.species} />
        <CardSimpleText description={'Gender: '} param={props.activeCard.gender} />
        <CardSimpleText description={'Origin: '} param={props.activeCard.origin.name} />
        <CardSimpleText description={'Location: '} param={props.activeCard.location.name} />
      </div>
    </>
  );
};

export default APICard;
