import React from 'react';
import style from './FormCardInstanceField.module.scss';

interface IFormCardInstanceField {
  description: string;
  param: string;
}

const FormCardInstanceField = (props: IFormCardInstanceField) => {
  return (
    <p className={style.description}>
      {props.description} <span className={style.param}>{props.param}</span>
    </p>
  );
};

export default FormCardInstanceField;
