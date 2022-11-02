import CardSimpleText from 'components/CardSimpleText';
import React, { useContext } from 'react';
import { GlobalContext } from 'contexts/GlobalContext';
import style from './APICardDetails.module.scss';
import { Link } from 'react-router-dom';
import { ICharacter } from 'components/APIComponent/APIComponent';

const APICardDetails = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { isModalActive, activeItem } = state;

  const handleClick = () => {
    dispatch({ type: 'isModalActive', payload: !isModalActive });
    dispatch({ type: 'activeItem', payload: null });
  };

  if (activeItem !== null) {
    return (
      <div className={style.wrapper}>
        <button onClick={handleClick}>
          <Link to={'/'}>Back</Link>
        </button>
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
      </div>
    );
  } else return <></>;
};

export default APICardDetails;
