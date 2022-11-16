import CardSimpleText from 'components/CardSimpleText';
import Container from 'components/Container';
import React, { useContext, useEffect } from 'react';
import { Link, redirect, useParams } from 'react-router-dom';
import style from './APICardDetailsPage.module.scss';
import { GlobalContext } from 'contexts/GlobalContext';
import { ICharacter } from 'types/types';

const APICardDetailsPage = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { activeItem } = state;
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
        <>
          <Link to={'/'}>
            <button className={style.button} onClick={handleClick}>
              Back to characters list
            </button>
          </Link>
          <h1 className={style.cardTitle}>{activeItem.name}</h1>
          <div className={style.wrapper}>
            <div className={style.imageWrapper}>
              <img
                className={style.image}
                src={`${activeItem.image}`}
                alt={`Image ${activeItem.name}`}
              />
            </div>
            <div className={style.textWrapper}>
              <CardSimpleText description={'Status: '} param={activeItem.status} />
              <CardSimpleText description={'Species: '} param={activeItem.species} />
              <CardSimpleText description={'Gender: '} param={activeItem.gender} />
              <CardSimpleText description={'Origin: '} param={activeItem.origin.name} />
              <CardSimpleText description={'Location: '} param={activeItem.location.name} />
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default APICardDetailsPage;
