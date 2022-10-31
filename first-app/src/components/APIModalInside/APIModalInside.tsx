import CardSimpleText from 'components/CardSimpleText';
import React, { useContext } from 'react';
import { ICharacter } from '../APIComponent/APIComponent';
import style from './APIModalInside.module.scss';
import { GlobalContext } from 'contexts/GlobalContext';

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
          <CardSimpleText description={'Status: '} param={activeItem.status} />
          <CardSimpleText description={'Species: '} param={activeItem.species} />
          <CardSimpleText description={'Gender: '} param={activeItem.gender} />
          <CardSimpleText description={'Origin: '} param={activeItem.origin.name} />
          <CardSimpleText description={'Location: '} param={activeItem.location.name} />
        </div>
      </>
    );
  } else return <></>;
};

export default APICard;
