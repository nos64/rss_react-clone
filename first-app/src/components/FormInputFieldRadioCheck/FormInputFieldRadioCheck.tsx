import React, { Component } from 'react';
import style from './FormInputFieldRadioCheck.module.scss';

interface IFormInputFieldRadioCheck {
  description: string;
  inputType: string;
  inputName: string;
  inputValue: string;
  inputRef: React.RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputTestId: string;
}
export default class FormInputFieldRadioCheck extends Component<IFormInputFieldRadioCheck> {
  render() {
    return (
      <label className={style.radioLabel}>
        <input
          className={style.radio}
          type={this.props.inputType}
          name={this.props.inputName}
          value={this.props.inputValue}
          ref={this.props.inputRef}
          onChange={this.props.onChange}
          data-testid={this.props.inputTestId}
        />
        {this.props.description}
      </label>
    );
  }
}
