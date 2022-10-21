import React from 'react';
import { IFormCard } from './../../pages/FormPage/FormPage';
import style from './FormCardInstance.module.scss';

const FormCardInstance = (props: IFormCard) => {
  return (
    <li className={style.item}>
      <div className={style.descriptionWrapper}>
        <p className={style.description}>
          Name: <span className={style.param}>{props.firstName}</span>
        </p>
        <p className={style.description}>
          Surname: <span className={style.param}>{props.surname}</span>
        </p>
        <p className={style.description}>
          Date of birth: <span className={style.param}>{props.dateOfBirth}</span>
        </p>
        <p className={style.description}>
          Gender: <span className={style.param}>{props.gender}</span>
        </p>
        <p className={style.description}>
          E-mail: <span className={style.param}>{props.email}</span>
        </p>
        <p className={style.description}>
          Country: <span className={style.param}>{props.country}</span>
        </p>
      </div>

      <div className={style.avatarWrapper}>
        <img className={style.image} src={props.picture} />
      </div>
    </li>
  );
};

export default FormCardInstance;
