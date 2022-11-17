import CardSimpleText from 'components/CardSimpleText';
import Container from 'components/Container';
import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './APICardDetailsPage.module.scss';
import { GlobalContext } from 'contexts/GlobalContext';

const APICardDetailsPage = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('activeItem')) {
      dispatch({
        type: 'activeItem',
        payload: JSON.parse(localStorage.getItem('activeItem') as string),
      });
    } else {
      navigate('/');
    }
  }, []);

  return (
    <Container>
      {state.activeItem && (
        <>
          <Link to={'/'}>
            <button className={style.button}>Back to characters list</button>
          </Link>
          <h1 className={style.cardTitle}>{state.activeItem.name}</h1>
          <div className={style.wrapper}>
            <div className={style.imageWrapper}>
              <img
                className={style.image}
                src={`${state.activeItem.image}`}
                alt={`Image ${state.activeItem.name}`}
              />
            </div>
            <div className={style.textWrapper}>
              <CardSimpleText description={'Status: '} param={state.activeItem.status} />
              <CardSimpleText description={'Species: '} param={state.activeItem.species} />
              <CardSimpleText description={'Gender: '} param={state.activeItem.gender} />
              <CardSimpleText description={'Origin: '} param={state.activeItem.origin.name} />
              <CardSimpleText description={'Location: '} param={state.activeItem.location.name} />
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default APICardDetailsPage;
