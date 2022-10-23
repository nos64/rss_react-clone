import Container from 'components/Container';
import React, { Component } from 'react';
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

interface FormPageState {
  formCards: IFormCard[];
}

interface FormPageProps {
  props?: string;
}

export default class FormPage extends Component<FormPageProps, FormPageState> {
  constructor(props: FormPageProps) {
    super(props);
    this.state = {
      formCards: [],
    };
  }

  createCard = (formCard: IFormCard) => {
    this.setState({ formCards: [...this.state.formCards, formCard] });
  };

  render() {
    return (
      <Container>
        <div className={style.wrapper}>
          <Form createCard={this.createCard} />
          <FormCard formCards={this.state.formCards} />
        </div>
      </Container>
    );
  }
}
