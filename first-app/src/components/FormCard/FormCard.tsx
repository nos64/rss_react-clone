import React, { Component, useContext } from 'react';
import FormCardInstance from '../FormCardInstance';
// import { IFormCard } from './../../pages/FormPage/FormPage';
import style from './FormCard.module.scss';
import { APIContext } from 'contexts/APIContext';
// interface FormPageState {
//   formCards: IFormCard[];
// }

const FormCard = () => {
  const { state } = useContext(APIContext);
  const { formCards } = state;

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
