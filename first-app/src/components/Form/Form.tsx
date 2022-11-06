import Container from 'components/Container';
import React, { createRef, useState } from 'react';
import style from './Form.module.scss';
import FormErrorMessage from '../FormErrorMessage';
import { FormFields, IFormError } from 'types/types';
import FormInputField from 'components/FormInputField';
import FormInputFieldRadioCheck from 'components/FormInputFieldRadioCheck';
import { errorMessagesText, formLineDescriptions } from 'utils/constants';
import { useAppDispatch } from '../../hooks/hooks';
import { addFormCards } from 'store/formReducer';

const Form = () => {
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

  const dispatch = useAppDispatch();

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    if (
      firstName?.current?.value.length ||
      surname?.current?.value.length ||
      dateOfBirth?.current?.value.length ||
      email?.current?.value.length ||
      genderMale?.current?.checked ||
      genderFemale?.current?.checked ||
      country?.current?.value.length ||
      picture?.current?.value.length
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
      dispatch(addFormCards(formObj));
    }
    e.target.reset();
    setDisableBtn(true);
  };

  const validateForm = () => {
    let isValidForm = true;
    const errorMessage: Partial<IFormError> = {};
    if (firstName.current && !/^[a-zA-Zа-яА-яА-Я]+$/.test(firstName.current.value)) {
      isValidForm = false;
      errorMessage.firstName = errorMessagesText.firstName;
    }
    if (surname.current && !/^[a-zA-Zа-яА-яА-Я]+$/.test(surname.current.value)) {
      isValidForm = false;
      errorMessage.surname = errorMessagesText.surname;
    }
    if (dateOfBirth.current) {
      if (!dateOfBirth.current.value || new Date(dateOfBirth.current.value) > new Date()) {
        isValidForm = false;
        errorMessage.dateOfBirth = errorMessagesText.dateOfBirth;
      }
    }
    if (genderMale.current && genderFemale.current) {
      if (!genderMale.current.checked && !genderFemale.current.checked) {
        isValidForm = false;
        errorMessage.gender = errorMessagesText.gender;
      }
    }
    if (email.current && !/.+@.+\..+/i.test(email.current.value)) {
      isValidForm = false;
      errorMessage.email = errorMessagesText.email;
    }
    if (country.current && !country.current.value) {
      isValidForm = false;
      errorMessage.country = errorMessagesText.country;
    }
    if (picture.current && !picture.current.value) {
      isValidForm = false;
      errorMessage.picture = errorMessagesText.picture;
    }
    if (rule.current && !rule.current.checked) {
      isValidForm = false;
      errorMessage.rule = errorMessagesText.rule;
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
          description={formLineDescriptions.firstName}
          inputType={'text'}
          inputName={'firstName'}
          ref={firstName}
          onChange={(e) => handleChange(e)}
          inputTestId={'firstName'}
          onFocus={() => resetErrorOnFocus('firstName')}
        />
        <FormErrorMessage message={errors.firstName} />
        <FormInputField
          description={formLineDescriptions.surname}
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
            description={formLineDescriptions.dateOfBirth}
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
          <FormInputFieldRadioCheck
            description={formLineDescriptions.genderMale}
            inputType={'radio'}
            inputName={'gender'}
            value={'Male'}
            ref={genderMale}
            onChange={(e) => handleChange(e)}
            inputTestId={'male'}
            onFocus={() => resetErrorOnFocus('gender')}
          />
          <FormInputFieldRadioCheck
            description={formLineDescriptions.genderFemale}
            inputType={'radio'}
            inputName={'gender'}
            value={'Female'}
            ref={genderFemale}
            onChange={(e) => handleChange(e)}
            inputTestId={'female'}
            onFocus={() => resetErrorOnFocus('gender')}
          />
        </div>
        <FormErrorMessage message={errors.gender} />
        <FormInputField
          description={formLineDescriptions.email}
          inputType={'text'}
          inputName={'email'}
          ref={email}
          onChange={(e) => handleChange(e)}
          inputTestId={'email'}
          onFocus={() => resetErrorOnFocus('email')}
        />
        <FormErrorMessage message={errors.email} />
        <label className={style.label}>
          {formLineDescriptions.country}
          <select
            className={style.textField}
            name="country"
            ref={country}
            data-testid={'country'}
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
          description={formLineDescriptions.avatar}
          inputType={'file'}
          inputName={'picture'}
          ref={picture}
          onChange={(e) => handleChange(e)}
          inputTestId={'picture'}
          onFocus={() => resetErrorOnFocus('picture')}
        />
        <FormErrorMessage message={errors.picture} />
        <FormInputFieldRadioCheck
          description={formLineDescriptions.rule}
          inputType={'checkbox'}
          inputName={'rule'}
          value={'rule'}
          ref={rule}
          onChange={(e) => handleChange(e)}
          inputTestId={'rule'}
          onFocus={() => resetErrorOnFocus('rule')}
        />
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
