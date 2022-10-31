import Container from 'components/Container';
import React from 'react';
import Form from '../../components/Form';
import FormCard from '../../components/FormCard';
import style from './FormPage.module.scss';

const FormPage = () => {
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
