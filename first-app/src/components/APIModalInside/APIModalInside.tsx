import CardSimpleText from 'components/CardSimpleText';
import React, { useContext } from 'react';
import style from './APIModalInside.module.scss';
import { GlobalContext } from 'contexts/GlobalContext';
import { cardDescription } from 'utils/constants';

const APICard = () => {
  const { state } = useContext(GlobalContext);
  const { activeItem } = state;
  if (activeItem !== null) {
    return (
      <>
        <div className={style.card__imageWrapper}>
          <img
            className={style.card__image}
            src={`${activeItem.image}`}
            alt={`Image ${activeItem.name}`}
          />
        </div>
        <div>
          <h3 className={style.card__title}>{activeItem.name}</h3>
          <CardSimpleText description={cardDescription.status} param={activeItem.status} />
          <CardSimpleText description={cardDescription.species} param={activeItem.species} />
          <CardSimpleText description={cardDescription.gender} param={activeItem.gender} />
          <CardSimpleText description={cardDescription.origin} param={activeItem.origin.name} />
          <CardSimpleText description={cardDescription.location} param={activeItem.location.name} />
        </div>
      </>
    );
  } else return <></>;
};

export default APICard;
