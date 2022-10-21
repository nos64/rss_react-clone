import React, { Component } from 'react';
import FormCardInstance from '../FormCardInstance';
import { IFormCard } from './../../pages/FormPage/FormPage';
import style from './FormCard.module.scss';
interface FormPageState {
  formCards: IFormCard[];
}

const FormCard = (props: FormPageState) => {
  return (
    <ul className={style.list}>
      {props.formCards.map((card) => (
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
