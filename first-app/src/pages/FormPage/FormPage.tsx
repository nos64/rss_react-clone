import Container from 'components/Container';
import React, { useState } from 'react';
import Form from '../../components/Form';
import FormCard from '../../components/FormCard';
import style from './FormPage.module.scss';

export interface IFormCard {
  firstName: string;
  surname: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  country: string;
  picture: string;
  rule: boolean;
  keyID?: string;
}

const FormPage = () => {
  const [formCards, setFormCards] = useState<IFormCard[]>([]);

  const createCard = (formCard: IFormCard) => {
    setFormCards([...formCards, formCard]);
  };

  return (
    <Container>
      <div className={style.wrapper}>
        <Form createCard={createCard} />
        <FormCard formCards={formCards} />
      </div>
    </Container>
  );
};

export default FormPage;
