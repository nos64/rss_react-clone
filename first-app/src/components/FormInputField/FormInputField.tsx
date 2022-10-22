import React, { Component, forwardRef, LegacyRef, MutableRefObject, RefObject } from 'react';
import FormCardInstance from '../FormCardInstance';
import { IFormCard } from '../../pages/FormPage/FormPage';
import style from './FormInputField.module.scss';

interface IFormInputField {
  description: string;
  inputType: string;
  inputName: string;
  // inputValue: string;
  // inputRef: MutableRefObject<HTMLInputElement | undefined>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  inputTestId: string;
  onFocus: (inputName: string) => void;
}
const FormInputField = forwardRef<HTMLInputElement, IFormInputField>((props, inputRef) => {
  return (
    <label className={style.label}>
      {/* First Name: */}
      {props.description}
      <input
        className={style.textField}
        // type="text"
        type={props.inputType}
        // name="firstName"
        name={props.inputName}
        // ref={this.firstName}
        // value={props.inputValue}
        ref={inputRef}
        // onChange={this.handleChange}
        onChange={props.onChange}
        // data-testid="firstName"
        data-testid={props.inputTestId}
        // onFocus={() => this.resetErrorOnFocus('firstName')}
        onFocus={() => props.onFocus(props.inputName)}
      />
    </label>
  );
});

export default FormInputField;
