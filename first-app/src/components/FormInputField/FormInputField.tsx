import React, { forwardRef } from 'react';
import FormCardInstance from '../FormCardInstance';
import { IFormCard } from '../../pages/FormPage/FormPage';
import style from './FormInputField.module.scss';

interface IFormInputField {
  description: string;
  inputType: string;
  inputName: string;
  // inputValue: string;
  // inputRef: MutableRefObject<HTMLInputElement | undefined>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputTestId: string;
  onFocus: (inputName: string) => void;
}
const FormInputField = forwardRef<HTMLInputElement, IFormInputField>((props, inputRef) => {
  return (
    <label className={style.label}>
      {props.description}
      <input
        className={style.textField}
        type={props.inputType}
        name={props.inputName}
        ref={inputRef}
        onChange={props.onChange}
        data-testid={props.inputTestId}
        onFocus={() => props.onFocus(props.inputName)}
      />
    </label>
  );
});

export default FormInputField;
