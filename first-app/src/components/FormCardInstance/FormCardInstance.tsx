import FormCardInstanceField from 'components/FormCardInstanceField';
import React, { Component } from 'react';
import { IFormCard } from './../../pages/FormPage/FormPage';
import style from './FormCardInstance.module.scss';

export default class FormCardInstance extends Component<IFormCard> {
  render() {
    return (
      <li className={style.item}>
        <div className={style.descriptionWrapper}>
          <FormCardInstanceField description={'Name: '} param={this.props.firstName} />
          <FormCardInstanceField description={'Surname: '} param={this.props.surname} />
          <FormCardInstanceField description={'Date of birth: '} param={this.props.dateOfBirth} />
          <FormCardInstanceField description={'Gender: '} param={this.props.gender} />
          <FormCardInstanceField description={'E-mail: '} param={this.props.email} />
          <FormCardInstanceField description={'Country: '} param={this.props.country} />
        </div>
        <div className={style.avatarWrapper}>
          <img className={style.image} src={this.props.picture} />
        </div>
      </li>
    );
  }
}
