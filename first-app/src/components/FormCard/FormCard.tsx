import React, { Component } from 'react';
import FormCardInstance from '../FormCardInstance';

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

export default class FormCard extends Component<FormPageState, FormPageProps> {
  constructor(props: FormPageState) {
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props.formCards.map((card) => (
          <FormCardInstance
            key={new Date().getTime()}
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
  }
}
