import React, { forwardRef } from 'react';
import style from './FormInputFieldRadioCheck.module.scss';

interface IFormInputFieldRadioCheck {
  description: string;
  inputType: string;
  inputName: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputTestId: string;
  onFocus: (inputName: string) => void;
}
const FormInputFieldRadioCheck = forwardRef<HTMLInputElement, IFormInputFieldRadioCheck>(
  (props, inputRef) => {
    return (
      <label className={style.radioLabel}>
        <input
          className={style.radio}
          type={props.inputType}
          name={props.inputName}
          value={props.value}
          ref={inputRef}
          onChange={props.onChange}
          data-testid={props.inputTestId}
          onFocus={() => props.onFocus(props.inputName)}
        />
        {props.description}
      </label>
    );
  }
);

export default FormInputFieldRadioCheck;
{
  /* <label className={style.radioLabel}>
  <input
    className={style.radio}
    type="radio"
    name="gender"
    value="Male"
    ref={genderMale}
    onChange={handleChange}
  />
  Male
</label>; */
}
