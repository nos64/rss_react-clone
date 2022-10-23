import Container from 'components/Container';
import React, {
  Component,
  createRef,
  LegacyRef,
  MutableRefObject,
  RefObject,
  useState,
} from 'react';
import style from './Form.module.scss';
import { IFormCard } from './../../pages/FormPage/FormPage';
import FormErrorMessage from '../FormErrorMessage';
import { FormFields, IFormError } from 'types/types';
import FormInputField from 'components/FormInputField';
interface IFormState {
  disableBtn: boolean;
  errors: Partial<IFormError>;
}

interface IFormPropsCreate {
  createCard: (data: IFormCard) => void;
}

const Form = (props: IFormPropsCreate) => {
  const firstName = createRef<HTMLInputElement>();
  const surname = createRef<HTMLInputElement>();
  const dateOfBirth = createRef<HTMLInputElement>();
  const genderMale = createRef<HTMLInputElement>();
  const genderFemale = createRef<HTMLInputElement>();
  const email = createRef<HTMLInputElement>();
  const country = createRef<HTMLSelectElement>();
  const picture = createRef<HTMLInputElement>();
  const rule = createRef<HTMLInputElement>();

  const [disableBtn, setDisableBtn] = useState(true);
  const [errors, setErrors] = useState<Partial<IFormError>>({});

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    if (
      (firstName.current && firstName.current.value.length) ||
      (surname.current && surname.current.value.length) ||
      (dateOfBirth.current && dateOfBirth.current.value.length) ||
      (email.current && email.current.value.length) ||
      (genderMale.current && genderMale.current.checked) ||
      (genderFemale.current && genderFemale.current.checked) ||
      (country.current && country.current.value.length) ||
      (picture.current && picture.current.value.length)
    ) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  };

  const handleSubmit: React.FocusEventHandler<HTMLFormElement & FormFields> = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setDisableBtn(true);
      return;
    }
    if (
      firstName.current &&
      surname.current &&
      dateOfBirth.current &&
      genderMale.current &&
      genderFemale.current &&
      email.current &&
      country.current &&
      picture.current &&
      picture.current.files &&
      rule.current
    ) {
      const formObj = {
        firstName: firstName.current.value,
        surname: surname.current.value,
        dateOfBirth: dateOfBirth.current.value,
        gender: genderMale.current.checked ? genderMale.current.value : genderFemale.current.value,
        email: email.current.value,
        country: country.current.value,
        picture: URL.createObjectURL(picture.current.files[0]),
        rule: rule.current.checked,
        keyID: new Date().getTime().toString(),
      };
      props.createCard(formObj);
    }
    e.target.reset();
    setDisableBtn(true);
  };

  const validateForm = () => {
    let isValidForm = true;
    const errorMessage: Partial<IFormError> = {};
    if (firstName.current && !/^[a-zA-Zа-яА-яА-Я]+$/.test(firstName.current.value)) {
      isValidForm = false;
      errorMessage.firstName = 'Please enter your correct first name';
    }
    if (surname.current && !/^[a-zA-Zа-яА-яА-Я]+$/.test(surname.current.value)) {
      isValidForm = false;
      errorMessage.surname = 'Please enter your correct surname name';
    }
    if (dateOfBirth.current) {
      if (!dateOfBirth.current.value || new Date(dateOfBirth.current.value) > new Date()) {
        isValidForm = false;
        errorMessage.dateOfBirth = 'Please select your correct date of birth';
      }
    }
    if (genderMale.current && genderFemale.current) {
      if (!genderMale.current.checked && !genderFemale.current.checked) {
        isValidForm = false;
        errorMessage.gender = 'Please select your gender';
      }
    }
    if (email.current && !/.+@.+\..+/i.test(email.current.value)) {
      isValidForm = false;
      errorMessage.email = 'Please enter correct E-mail';
    }
    if (country.current && !country.current.value) {
      isValidForm = false;
      errorMessage.country = 'Please select your country';
    }
    if (picture.current && !picture.current.value) {
      isValidForm = false;
      errorMessage.picture = 'Please input you avatar';
    }
    if (rule.current && !rule.current.checked) {
      isValidForm = false;
      errorMessage.rule = 'Please select this';
    }
    setErrors(errorMessage);
    if (isValidForm) {
      setErrors(errors);
    }
    return isValidForm;
  };

  const resetErrorOnFocus = (input: string) => {
    setErrors({
      ...errors,
      [input]: '',
    });
  };

  return (
    <Container>
      <form className={style.form} action="" onSubmit={handleSubmit} data-testid="form">
        <h2 className={style.title}>Registration form</h2>
        <FormInputField
          description={'First Name:'}
          inputType={'text'}
          inputName={'firstName'}
          ref={firstName}
          onChange={(e) => handleChange(e)}
          inputTestId={'firstName'}
          onFocus={() => resetErrorOnFocus('firstName')}
        />
        <FormErrorMessage message={errors.firstName} />
        <FormInputField
          description={'Surname:'}
          inputType={'text'}
          inputName={'surname'}
          ref={surname}
          onChange={(e) => handleChange(e)}
          inputTestId={'surname'}
          onFocus={() => resetErrorOnFocus('surname')}
        />
        <FormErrorMessage message={errors.surname} />
        <div className={style.dateWrapper}>
          <FormInputField
            description={'Date of birth:'}
            inputType={'date'}
            inputName={'dateOfBirth'}
            ref={dateOfBirth}
            onChange={(e) => handleChange(e)}
            inputTestId={'dateOfBirth'}
            onFocus={() => resetErrorOnFocus('dateOfBirth')}
          />
        </div>
        <FormErrorMessage message={errors.dateOfBirth} />
        <div className={style.genderWrapper} onFocus={() => resetErrorOnFocus('gender')}>
          Gender:
          <label className={style.radioLabel}>
            <input
              className={style.radio}
              type="radio"
              name="gender"
              value="Male"
              ref={genderMale}
              onChange={handleChange}
            />
            Male
          </label>
          <label className={style.radioLabel}>
            <input
              className={style.radio}
              type="radio"
              name="gender"
              value="Female"
              ref={genderFemale}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        <FormErrorMessage message={errors.gender} />
        <FormInputField
          description={'E-mail:'}
          inputType={'text'}
          inputName={'email'}
          ref={email}
          onChange={(e) => handleChange(e)}
          inputTestId={'email'}
          onFocus={() => resetErrorOnFocus('email')}
        />
        <FormErrorMessage message={errors.email} />
        <label className={style.label}>
          Country:
          <select
            className={style.textField}
            name="country"
            ref={country}
            onChange={handleChange}
            onFocus={() => resetErrorOnFocus('country')}
          >
            <option value="">--Please choose a country--</option>
            <option value="Russia">Russia</option>
            <option value="Belarus">Belarus</option>
            <option value="Ukrane">Ukrane</option>
            <option value="Kazakhstan">Kazakhstan</option>
          </select>
        </label>
        <FormErrorMessage message={errors.country} />
        <FormInputField
          description={'Avatart:'}
          inputType={'file'}
          inputName={'picture'}
          ref={picture}
          onChange={(e) => handleChange(e)}
          inputTestId={'picture'}
          onFocus={() => resetErrorOnFocus('picture')}
        />
        <FormErrorMessage message={errors.picture} />
        <label>
          <input
            className={style.checkbox}
            type="checkbox"
            name="rule"
            ref={rule}
            onFocus={() => resetErrorOnFocus('rule')}
          />
          I consent to my personal data
        </label>
        <FormErrorMessage message={errors.rule} />
        <button
          className={style.button}
          type="submit"
          disabled={!!disableBtn}
          data-testid="form-button"
        >
          Registration
        </button>
      </form>
    </Container>
  );
};

export default Form;
