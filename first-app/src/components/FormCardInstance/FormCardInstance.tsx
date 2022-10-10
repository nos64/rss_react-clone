import React, { Component } from 'react';
import { IFormCard } from './../../pages/FormPage/FormPage';

interface FormPageProps {
  props?: string;
}

export default class FormCardInstance extends Component<IFormCard> {
  render() {
    return (
      <li>
        <p>
          Name: <span>{this.props.firstName}</span>
        </p>
        <p>
          Surname: <span>{this.props.surname}</span>
        </p>
        <p>
          Date of birth: <span>{this.props.dateOfBirth}</span>
        </p>
        <p>
          Gender: <span>{this.props.gender}</span>
        </p>
        <p>
          E-mail: <span>{this.props.email}</span>
        </p>
        <p>
          Country: <span>{this.props.country}</span>
        </p>
        <p>
          Picture: <span>{this.props.picture}</span>
        </p>
      </li>
    );
  }
}
