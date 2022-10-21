import Container from 'components/Container';
import React, { Component } from 'react';
import style from './Form.module.scss';
import { IFormCard } from './../../pages/FormPage/FormPage';
import FormErrorMessage from '../FormErrorMessage';
interface IFormState {
  disableBtn: boolean;
  errors: IFormError;
}

interface IFormPropsCreate {
  createCard: (data: IFormCard) => void;
}

interface IFormError {
  firstName?: string;
  surname?: string;
  dateOfBirth?: string;
  gender?: string;
  email?: string;
  country?: string;
  picture?: string;
  rule?: string;
}

type FormFields = {
  firstName: HTMLInputElement;
  surname: HTMLInputElement;
  dateOfBirth: HTMLInputElement;
  gender: HTMLInputElement;

  email: HTMLInputElement;
  country: HTMLSelectElement;
  picture: HTMLInputElement;
  rule: HTMLInputElement;
};
export default class Form extends Component<IFormPropsCreate, IFormState> {
  readonly firstName: React.RefObject<HTMLInputElement>;
  readonly surname: React.RefObject<HTMLInputElement>;
  readonly dateOfBirth: React.RefObject<HTMLInputElement>;
  readonly genderMale: React.RefObject<HTMLInputElement>;
  readonly genderFemale: React.RefObject<HTMLInputElement>;
  readonly email: React.RefObject<HTMLInputElement>;
  readonly country: React.RefObject<HTMLSelectElement>;
  readonly picture: React.RefObject<HTMLInputElement>;
  readonly rule: React.RefObject<HTMLInputElement>;

  constructor(props: IFormPropsCreate) {
    super(props);
    this.firstName = React.createRef();
    this.surname = React.createRef();
    this.dateOfBirth = React.createRef();
    this.genderMale = React.createRef();
    this.genderFemale = React.createRef();
    this.email = React.createRef();
    this.country = React.createRef();
    this.picture = React.createRef();
    this.rule = React.createRef();
    this.state = {
      disableBtn: true,
      errors: {},
    };
  }

  handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    if (
      (this.firstName.current && this.firstName.current.value.length) ||
      (this.surname.current && this.surname.current.value.length) ||
      (this.dateOfBirth.current && this.dateOfBirth.current.value.length) ||
      (this.email.current && this.email.current.value.length) ||
      (this.genderMale.current && this.genderMale.current.checked) ||
      (this.genderFemale.current && this.genderFemale.current.checked) ||
      (this.country.current && this.country.current.value.length) ||
      (this.picture.current && this.picture.current.value.length)
    ) {
      this.setState({ disableBtn: false });
    } else this.setState({ disableBtn: true });
  };

  handleSubmit: React.FocusEventHandler<HTMLFormElement & FormFields> = (e) => {
    e.preventDefault();
    if (!this.validateForm()) {
      this.setState({ disableBtn: true });
      return;
    }
    if (
      this.firstName.current &&
      this.surname.current &&
      this.dateOfBirth.current &&
      this.genderMale.current &&
      this.genderFemale.current &&
      this.email.current &&
      this.country.current &&
      this.picture.current &&
      this.picture.current.files &&
      this.rule.current
    ) {
      const formObj = {
        firstName: this.firstName.current.value,
        surname: this.surname.current.value,
        dateOfBirth: this.dateOfBirth.current.value,
        gender: this.genderMale.current.checked
          ? this.genderMale.current.value
          : this.genderFemale.current.value,
        email: this.email.current.value,
        country: this.country.current.value,
        picture: URL.createObjectURL(this.picture.current.files[0]),
        rule: this.rule.current.checked,
        keyID: new Date().getTime().toString(),
      };
      this.props.createCard(formObj);
      console.log('formObj: ', formObj);
    }
    e.target.reset();
    this.setState({ disableBtn: true });
  };

  validateForm = () => {
    let isValidForm = true;
    const errorMessage: IFormError = {};
    if (this.firstName.current && !/^[a-zA-Zа-яА-яА-Я]+$/.test(this.firstName.current.value)) {
      isValidForm = false;
      errorMessage.firstName = 'Please enter your correct first name';
    }
    if (this.surname.current && !/^[a-zA-Zа-яА-яА-Я]+$/.test(this.surname.current.value)) {
      isValidForm = false;
      errorMessage.surname = 'Please enter your correct surname name';
    }
    if (this.dateOfBirth.current) {
      if (
        !this.dateOfBirth.current.value ||
        new Date(this.dateOfBirth.current.value) > new Date()
      ) {
        isValidForm = false;
        errorMessage.dateOfBirth = 'Please select your correct date of birth';
      }
    }
    if (this.genderMale.current && this.genderFemale.current) {
      if (!this.genderMale.current.checked && !this.genderFemale.current.checked) {
        isValidForm = false;
        errorMessage.gender = 'Please select your gender';
      }
    }
    if (this.email.current && !/.+@.+\..+/i.test(this.email.current.value)) {
      isValidForm = false;
      errorMessage.email = 'Please enter correct E-mail';
    }
    if (this.country.current && !this.country.current.value) {
      isValidForm = false;
      errorMessage.country = 'Please select your country';
    }
    if (this.picture.current && !this.picture.current.value) {
      isValidForm = false;
      errorMessage.picture = 'Please input you avatar';
    }
    if (this.rule.current && !this.rule.current.checked) {
      isValidForm = false;
      errorMessage.rule = 'Please select this';
    }
    this.setState({
      errors: errorMessage,
    });
    if (isValidForm) {
      this.setState({ errors: {} });
    }
    return isValidForm;
  };

  resetErrorOnFocus = (input: string) => {
    this.setState({
      errors: {
        ...this.state.errors,
        [input]: '',
      },
    });
  };

  render() {
    return (
      <Container>
        <form className={style.form} action="" onSubmit={this.handleSubmit} data-testid="form">
          <h2 className={style.title}>Registration form</h2>
          <label className={style.label}>
            First Name:
            <input
              className={style.textField}
              type="text"
              name="firstName"
              ref={this.firstName}
              onChange={this.handleChange}
              data-testid="firstName"
              onFocus={() => this.resetErrorOnFocus('firstName')}
            />
          </label>
          <FormErrorMessage message={this.state.errors.firstName} />
          <label className={style.label}>
            Surname:
            <input
              className={style.textField}
              type="text"
              name="surname"
              ref={this.surname}
              onChange={this.handleChange}
              onFocus={() => this.resetErrorOnFocus('surname')}
            />
          </label>
          <FormErrorMessage message={this.state.errors.surname} />
          <div className={style.dateWrapper}>
            <label className={style.label}>
              Date of birth:
              <input
                className={style.dateField}
                type="date"
                name="dateOfBirth"
                ref={this.dateOfBirth}
                onChange={this.handleChange}
                onFocus={() => this.resetErrorOnFocus('dateOfBirth')}
              />
            </label>
          </div>
          <FormErrorMessage message={this.state.errors.dateOfBirth} />
          <div className={style.genderWrapper} onFocus={() => this.resetErrorOnFocus('gender')}>
            Gender:
            <label className={style.radioLabel}>
              <input
                className={style.radio}
                type="radio"
                name="gender"
                value="Male"
                ref={this.genderMale}
                onChange={this.handleChange}
              />
              Male
            </label>
            <label className={style.radioLabel}>
              <input
                className={style.radio}
                type="radio"
                name="gender"
                value="Female"
                ref={this.genderFemale}
                onChange={this.handleChange}
              />
              Female
            </label>
          </div>
          <FormErrorMessage message={this.state.errors.gender} />
          <label className={style.label}>
            E-mail:
            <input
              className={style.textField}
              type="text"
              title="Enter your e-mail"
              ref={this.email}
              onChange={this.handleChange}
              onFocus={() => this.resetErrorOnFocus('email')}
            />
          </label>
          <FormErrorMessage message={this.state.errors.email} />
          <label className={style.label}>
            Country:
            <select
              className={style.textField}
              name="country"
              ref={this.country}
              onChange={this.handleChange}
              onFocus={() => this.resetErrorOnFocus('country')}
            >
              <option value="">--Please choose a country--</option>
              <option value="Russia">Russia</option>
              <option value="Belarus">Belarus</option>
              <option value="Ukrane">Ukrane</option>
              <option value="Kazakhstan">Kazakhstan</option>
            </select>
          </label>
          <FormErrorMessage message={this.state.errors.country} />
          <label className={style.label}>
            Avatart:
            <input
              className={style.textField}
              type="file"
              name="picture"
              ref={this.picture}
              onChange={this.handleChange}
              onFocus={() => this.resetErrorOnFocus('picture')}
            />
          </label>
          <FormErrorMessage message={this.state.errors.picture} />
          <label>
            <input
              className={style.checkbox}
              type="checkbox"
              name="rule"
              ref={this.rule}
              onChange={this.handleChange}
              onFocus={() => this.resetErrorOnFocus('rule')}
            />
            I consent to my personal data
          </label>
          <FormErrorMessage message={this.state.errors.rule} />
          <button
            className={style.button}
            type="submit"
            disabled={this.state.disableBtn ? true : false}
            data-testid="form-button"
          >
            Registration
          </button>
        </form>
      </Container>
    );
  }
}
