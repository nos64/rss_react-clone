import React, { useContext } from 'react';
import FormCardInstance from '../FormCardInstance';
import style from './FormCard.module.scss';
import { GlobalContext } from 'contexts/GlobalContext';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';

const FormCard = () => {
  const formCards = useAppSelector((state) => state.form.formCards);
  // const { state } = useContext(GlobalContext);
  // const { formCards } = state;

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
