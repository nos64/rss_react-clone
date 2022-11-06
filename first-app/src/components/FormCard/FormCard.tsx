import React from 'react';
import FormCardInstance from '../FormCardInstance';
import style from './FormCard.module.scss';
import { useAppSelector } from '../../hooks/hooks';

const FormCard = () => {
  const formCards = useAppSelector((state) => state.form.formCards);

  return (
    <ul className={style.list}>
      {formCards.map((card) => (
        <FormCardInstance
          key={card.keyID}
          firstName={card.firstName}
          surname={card.surname}
          dateOfBirth={card.dateOfBirth}
          gender={card.gender}
          email={card.email}
          country={card.country}
          picture={card.picture}
          rule={card.rule}
        />
      ))}
    </ul>
  );
};

export default FormCard;
