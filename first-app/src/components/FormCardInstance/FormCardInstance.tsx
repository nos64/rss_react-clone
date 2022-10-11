import React, { Component } from 'react';
import { IFormCard } from './../../pages/FormPage/FormPage';
import style from './FormCardInstance.module.scss';
interface FormPageProps {
  props?: string;
}

export default class FormCardInstance extends Component<IFormCard> {
  render() {
    return (
      <li className={style.item}>
        <div className={style.descriptionWrapper}>
          <p className={style.description}>
            Name: <span className={style.param}>{this.props.firstName}</span>
          </p>
          <p className={style.description}>
            Surname: <span className={style.param}>{this.props.surname}</span>
          </p>
          <p className={style.description}>
            Date of birth: <span className={style.param}>{this.props.dateOfBirth}</span>
          </p>
          <p className={style.description}>
            Gender: <span className={style.param}>{this.props.gender}</span>
          </p>
          <p className={style.description}>
            E-mail: <span className={style.param}>{this.props.email}</span>
          </p>
          <p className={style.description}>
            Country: <span className={style.param}>{this.props.country}</span>
          </p>
        </div>

        <div className={style.avatarWrapper}>
          <img className={style.image} src={this.props.picture} />
        </div>
      </li>
    );
  }
}
