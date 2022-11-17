import CardSimpleText from 'components/CardSimpleText';
import Container from 'components/Container';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './APICardDetailsPage.module.scss';
import { useAppSelector } from 'hooks/hooks';
import { cardDescription } from 'utils/constants';

const APICardDetailsPage = () => {
  const activeItem = useAppSelector((state) => state.apiData.activeItem);

  return (
    <Container>
      {activeItem && (
        <>
          <Link to={'/'}>
            <button className={style.button} type="button">
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
              <CardSimpleText description={cardDescription.status} param={activeItem.status} />
              <CardSimpleText description={cardDescription.species} param={activeItem.species} />
              <CardSimpleText description={cardDescription.gender} param={activeItem.gender} />
              <CardSimpleText description={cardDescription.origin} param={activeItem.origin.name} />
              <CardSimpleText
                description={cardDescription.location}
                param={activeItem.location.name}
              />
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default APICardDetailsPage;
