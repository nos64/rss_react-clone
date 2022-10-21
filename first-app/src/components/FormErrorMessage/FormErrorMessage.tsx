import React from 'react';
import style from './FormErrorMessage.module.scss';

interface Props {
  message?: string;
}

const FormErrorMessage = (props: Props) => {
  return (
    <div
      className={style.errorMessage}
      style={props.message ? { color: 'red' } : { color: 'transperernt' }}
    >
      {props.message}
    </div>
  );
};

export default FormErrorMessage;
