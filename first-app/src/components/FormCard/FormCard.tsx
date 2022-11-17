import React, { useContext } from 'react';
import FormCardInstance from '../FormCardInstance';
import style from './FormCard.module.scss';
import { GlobalContext } from 'contexts/GlobalContext';

const FormCard = () => {
  const { state } = useContext(GlobalContext);

  return (
    <ul className={style.list}>
      {state.formCards.map((card) => (
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
