import React, { Component } from 'react';
import style from './FormCardInstanceField.module.scss';

interface IFormCardInstanceField {
  description: string;
  param: string;
}

export default class FormCardInstanceField extends Component<IFormCardInstanceField> {
  render() {
    return (
      <p className={style.description}>
        {this.props.description}
        <span className={style.param}>{this.props.param}</span>
      </p>
    );
  }
}
