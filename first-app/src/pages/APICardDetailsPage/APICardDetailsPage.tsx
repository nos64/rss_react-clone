import CardSimpleText from 'components/CardSimpleText';
import Container from 'components/Container';
import React, { useEffect } from 'react';
import { Link, redirect, useParams } from 'react-router-dom';
import style from './APICardDetailsPage.module.scss';
import { ICharacter } from 'types/types';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { setActivItem } from '../../store/apiReducer';

const APICardDetailsPage = () => {
  const dispatch = useAppDispatch();
  const activeItem = useAppSelector((state) => state.apiData.activeItem);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        if (!res) {
          return redirect('/');
        }
        return res.json();
      })
      .then((card: ICharacter | null) => {
        if (card) {
          dispatch(setActivItem(card));
        }
      });
  }, [dispatch, id]);

  const handleButtonClick = () => {
    dispatch(setActivItem(null!));
    return redirect('/');
  };

  return (
    <Container>
      {activeItem && (
        <>
          <button className={style.button} onClick={handleButtonClick}>
            <Link to={'/'}>Back to characters list</Link>
          </button>
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
