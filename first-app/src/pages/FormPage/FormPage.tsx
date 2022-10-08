import Container from 'components/Container';
import React, { Component } from 'react';
import Form from '../../components/Form';
import FormCard from '../../components/FormCard';

interface IFormCard {
  firstName: string;
  surname: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  country: string;
  picture: string;
  rule: boolean;
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
    console.log(this.state.formCards);
  };

  render() {
    return (
      <Container>
        <Form createCard={this.createCard} />
        <FormCard formCards={this.state.formCards} />
      </Container>
    );
  }
}
