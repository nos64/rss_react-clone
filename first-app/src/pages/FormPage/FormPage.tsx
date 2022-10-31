import Container from 'components/Container';
import React, { useContext, useState } from 'react';
import Form from '../../components/Form';
import FormCard from '../../components/FormCard';
import style from './FormPage.module.scss';
import { APIContext } from 'contexts/APIContext';

const FormPage = () => {
  const { state, dispatch } = useContext(APIContext);
  const { formCards, formCard } = state;


  return (
    <Container>
      <div className={style.wrapper}>
        <Form />
        <FormCard />
      </div>
    </Container>
  );
};

export default FormPage;
