import CardSimpleText from 'components/CardSimpleText';
import { useAppDispatch } from 'hooks/hooks';
import React from 'react';
import { setActivItem } from 'store/apiReducer';
import { ICharacter } from 'types/types';
import { cardDescription } from 'utils/constants';
import style from './APICard.module.scss';

const APICard: React.FC<ICharacter> = (props) => {
  const dispatch = useAppDispatch();

  const handleCardClick = () => {
    localStorage.setItem('activeItem', JSON.stringify(props));
    dispatch(setActivItem(props));
  };

  return (
    <li className={style.card} onClick={handleCardClick}>
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
