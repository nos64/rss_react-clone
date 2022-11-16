import CardSimpleText from 'components/CardSimpleText';
import React, { useContext } from 'react';
import style from './APIModalInside.module.scss';
import { GlobalContext } from '../../contexts/GlobalContext';
import { cardDescription } from '../../utils/constants';

const APICard = () => {
  const { state } = useContext(GlobalContext);
  if (state.activeItem) {
    return (
      <>
        <div className={style.card__imageWrapper}>
          <img
            className={style.card__image}
            src={`${state.activeItem.image}`}
            alt={`Image ${state.activeItem.name}`}
          />
        </div>
        <div>
          <h3 className={style.card__title}>{state.activeItem.name}</h3>
          <CardSimpleText description={cardDescription.status} param={state.activeItem.status} />
          <CardSimpleText description={cardDescription.species} param={state.activeItem.species} />
          <CardSimpleText description={cardDescription.gender} param={state.activeItem.gender} />
          <CardSimpleText
            description={cardDescription.origin}
            param={state.activeItem.origin.name}
          />
          <CardSimpleText
            description={cardDescription.location}
            param={state.activeItem.location.name}
          />
        </div>
      </>
    );
  } else return <></>;
};

export default APICard;
