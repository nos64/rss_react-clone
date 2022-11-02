import { ICharacter } from 'components/APIComponent/APIComponent';
import CardSimpleText from 'components/CardSimpleText';
import Container from 'components/Container';
import React, { useContext, useEffect, useState } from 'react';
import { Link, redirect, useParams } from 'react-router-dom';
import style from './APICardDetailsPage.module.scss';
import { GlobalContext } from 'contexts/GlobalContext';

const APICardDetailsPage = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { activeItem } = state;

  const [card, setCard] = useState<ICharacter | null>(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        if (!res) {
          return redirect('/');
        }
        return res.json();
      })
      .then((card: ICharacter) => dispatch({ type: 'activeItem', payload: card }));
  }, [id]);

  const handleClick = () => {
    dispatch({ type: 'activeItem', payload: null });
  };

  return (
    <Container>
      {activeItem && (
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
      )}
    </Container>
  );
};

export default APICardDetailsPage;
