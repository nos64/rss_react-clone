import React, { Component } from 'react';
import style from './FormInputField.module.scss';

interface IFormInputField {
  description: string;
  inputType: string;
  inputName: string;
  inputRef: React.RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputTestId: string;
  onFocus: (inputName: string) => void;
}

export default class FormInputField extends Component<IFormInputField> {
  render() {
    return (
      <label className={style.label}>
        {this.props.description}
      <input
        className={style.textField}
        type={this.props.inputType}
        name={this.props.inputName}
        ref={this.props.inputRef}
        onChange={this.props.onChange}
        data-testid={this.props.inputTestId}
        onFocus={() => this.props.onFocus(this.props.inputName)}
      />
    </label>
    )
  }

}