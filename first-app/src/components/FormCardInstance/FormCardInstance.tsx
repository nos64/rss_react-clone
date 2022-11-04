import FormCardInstanceField from 'components/FormCardInstanceField';
import React from 'react';
import { formLineDescriptions } from 'utils/constants';
import { IFormCard } from '../../types/types';
import style from './FormCardInstance.module.scss';

const FormCardInstance = (props: IFormCard) => {
  return (
    <li className={style.item}>
      <div className={style.descriptionWrapper}>
        <FormCardInstanceField
          description={formLineDescriptions.firstName}
          param={props.firstName}
        />
        <FormCardInstanceField description={formLineDescriptions.surname} param={props.surname} />
        <FormCardInstanceField
          description={formLineDescriptions.dateOfBirth}
          param={props.dateOfBirth}
        />
        <FormCardInstanceField description={formLineDescriptions.gender} param={props.gender} />
        <FormCardInstanceField description={formLineDescriptions.email} param={props.email} />
        <FormCardInstanceField description={formLineDescriptions.country} param={props.country} />
      </div>
      <div className={style.avatarWrapper}>
        <img className={style.image} src={props.picture} />
      </div>
    </li>
  );
};

export default FormCardInstance;
