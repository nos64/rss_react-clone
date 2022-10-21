import FormCardInstanceField from 'components/FormCardInstanceField';
import React from 'react';
import { IFormCard } from './../../pages/FormPage/FormPage';
import style from './FormCardInstance.module.scss';

const FormCardInstance = (props: IFormCard) => {
  return (
    <li className={style.item}>
      <div className={style.descriptionWrapper}>
        <FormCardInstanceField description={'Name: '} param={props.firstName} />
        <FormCardInstanceField description={'Surname: '} param={props.surname} />
        <FormCardInstanceField description={'Date of birth: '} param={props.dateOfBirth} />
        <FormCardInstanceField description={'Gender: '} param={props.gender} />
        <FormCardInstanceField description={'E-mail: '} param={props.email} />
        <FormCardInstanceField description={'Country: '} param={props.country} />
      </div>
      <div className={style.avatarWrapper}>
        <img className={style.image} src={props.picture} />
      </div>
    </li>
  );
};

export default FormCardInstance;
