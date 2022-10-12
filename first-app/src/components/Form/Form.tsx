import Container from 'components/Container';
import React, { Component } from 'react';
import style from './Form.module.scss';
import { IFormCard } from './../../pages/FormPage/FormPage';
interface IFormState {
  disableBtn: boolean;
  errors: IFormError;
  firstName: boolean;
  surname: boolean;
  dateOfBirth: boolean;
  gender: boolean;
  email: boolean;
  country: boolean;
  picture: boolean | null;
  rule: boolean;
  // dataProcess: boolean;
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
  firstName: React.RefObject<HTMLInputElement>;
  private surname: React.RefObject<HTMLInputElement>;
  readonly dateOfBirth: React.RefObject<HTMLInputElement>;
  readonly gender: React.RefObject<HTMLInputElement>;
  readonly email: React.RefObject<HTMLInputElement>;
  readonly country: React.RefObject<HTMLSelectElement>;
  readonly picture: React.RefObject<HTMLInputElement>;
  readonly rule: React.RefObject<HTMLInputElement>;

  constructor(props: IFormPropsCreate) {
    super(props);
    this.firstName = React.createRef();
    this.surname = React.createRef();
    this.dateOfBirth = React.createRef();
    this.gender = React.createRef();
    this.email = React.createRef();
    this.country = React.createRef();
    this.picture = React.createRef();
    this.rule = React.createRef();
    this.state = {
      disableBtn: true,
      errors: {},
      firstName: false,
      surname: false,
      dateOfBirth: false,
      gender: false,
      email: false,
      country: false,
      picture: false,
      rule: false,
    };
  }

  handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    // if (this.picture.current && this.picture.current.files && this.picture.current.value.length) {
    //   this.setState({ picture: URL.createObjectURL(this.picture.current.files[0]), file: true });
    // }
    if (
      (this.firstName.current && this.firstName.current.value.length) ||
      (this.surname.current && this.surname.current.value.length) ||
      (this.dateOfBirth.current && this.dateOfBirth.current.value.length) ||
      (this.email.current && this.email.current.value.length) ||
      (this.picture.current && this.picture.current.value.length)
    ) {
      this.setState({ disableBtn: false });
    } else this.setState({ disableBtn: true });
  };

  handleChangeSelect: React.ChangeEventHandler<HTMLSelectElement> = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    e.preventDefault();
    if (this.country.current && this.country.current.value.length) {
      this.setState({ disableBtn: false });
    }
  };

  handleSubmit: React.FocusEventHandler<HTMLFormElement & FormFields> = (e) => {
    // handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!this.validateForm()) {
      this.setState({ disableBtn: true });
      return;
    }
    if (
      this.firstName.current &&
      this.surname.current &&
      this.dateOfBirth.current &&
      this.gender.current &&
      this.email.current &&
      this.country.current &&
      this.picture.current &&
      this.rule.current
    ) {
      const formObj = {
        firstName: this.firstName.current.value,
        surname: this.surname.current.value,
        dateOfBirth: this.dateOfBirth.current.value,
        gender: this.gender.current.value,
        email: this.email.current.value,
        country: this.country.current.value,
        picture: this.picture.current.value,
        rule: this.rule.current.checked,
        keyID: new Date().getTime().toString(),
      };
      this.props.createCard(formObj);
    }
    e.target.reset();
    this.setState({ disableBtn: true });
  };

  validateForm = () => {
    let isValidForm = true;
    const errorMessage: IFormError = {};
    if (
      this.firstName.current &&
      // !this.firstName.current.value &&
      !/^[a-zA-Zа-яА-яА-Я]+$/.test(this.firstName.current.value)
    ) {
      isValidForm = false;
      errorMessage.firstName = 'Please enter your correct first name';
      console.log(111);
    }
    if (
      this.surname.current &&
      // !this.surname.current.value.length &&
      !/^[a-zA-Zа-яА-яА-Я]+$/.test(this.surname.current.value)
    ) {
      isValidForm = false;
      errorMessage.surname = 'Please enter your correct surname name';
      console.log(222);
    }
    if (this.dateOfBirth.current && !this.dateOfBirth.current.value) {
      isValidForm = false;
      errorMessage.dateOfBirth = 'Please select your date of birth';
      console.log(333);
    }
    if (this.gender.current && !this.gender.current.value) {
      isValidForm = false;
      errorMessage.gender = 'Please select your gender';
      console.log(444);
    }
    if (
      this.email.current &&
      // !this.email.current?.value.length &&
      !/.+@.+\..+/i.test(this.email.current.value)
    ) {
      isValidForm = false;
      errorMessage.email = 'Please enter correct E-mail';
      console.log(555);
    }
    if (this.country.current && !this.country.current.value) {
      isValidForm = false;
      errorMessage.country = 'Please select your country';
      console.log(666);
    }
    if (this.picture.current && !this.picture.current.value) {
      isValidForm = false;
      errorMessage.picture = 'Please onput you avatar';
      console.log('avatatar');
    }
    if (this.rule.current && !this.rule.current.checked) {
      isValidForm = false;
      errorMessage.rule = 'Please select this';
      console.log(777);
    }
    this.setState({
      errors: errorMessage,
    });
    return isValidForm;
  };

  render() {
    return (
      <Container>
        <form className={style.form} action="" onSubmit={this.handleSubmit}>
          <h2 className={style.title}>Registration form</h2>
          <label className={style.label}>
            Name:
            <input
              className={style.textField}
              type="text"
              name="firstName"
              ref={this.firstName}
              onChange={this.handleChange}
            />
          </label>
          <div
            className={style.errorMessage}
            style={this.state.errors.firstName ? { color: 'red' } : { color: 'transperernt' }}
          >
            {this.state.errors.firstName}
          </div>
          <label className={style.label}>
            Surname:
            <input
              className={style.textField}
              type="text"
              name="surname"
              ref={this.surname}
              onChange={this.handleChange}
            />
          </label>
          <div
            className={style.errorMessage}
            style={this.state.errors.surname ? { color: 'red' } : { color: 'transperernt' }}
          >
            {this.state.errors.surname}
          </div>
          <div className={style.dateWrapper}>
            <label className={style.label}>
              Date of birth:
              <input
                className={style.dateField}
                type="date"
                name="dateOfBirth"
                ref={this.dateOfBirth}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div
            className={style.errorMessage}
            style={this.state.errors.dateOfBirth ? { color: 'red' } : { color: 'transperernt' }}
          >
            {this.state.errors.dateOfBirth}
          </div>
          <div className={style.genderWrapper}>
            Gender:
            <label className={style.radioLabel}>
              <input
                className={style.radio}
                type="radio"
                name="gender"
                value="male"
                ref={this.gender}
              />
              Male
            </label>
            <label className={style.radioLabel}>
              <input
                className={style.radio}
                type="radio"
                name="gender"
                value="female"
                ref={this.gender}
              />
              Female
            </label>
          </div>
          <div
            className={style.errorMessage}
            style={this.state.errors.gender ? { color: 'red' } : { color: 'transperernt' }}
          >
            {this.state.errors.gender}
          </div>
          <label className={style.label}>
            E-mail:
            <input
              className={style.textField}
              type="text"
              title="Enter your e-mail"
              ref={this.email}
              onChange={this.handleChange}
            />
          </label>
          <div
            className={style.errorMessage}
            style={this.state.errors.email ? { color: 'red' } : { color: 'transperernt' }}
          >
            {this.state.errors.email}
          </div>
          <label className={style.label}>
            Country:
            <select
              className={style.textField}
              name="country"
              ref={this.country}
              onChange={this.handleChangeSelect}
            >
              <option value="">--Please choose a country--</option>
              <option value="Russia">Russia</option>
              <option value="Belarus">Belarus</option>
              <option value="Ukrane">Ukrane</option>
              <option value="Kazakhstan">Kazakhstan</option>
            </select>
          </label>
          <div
            className={style.errorMessage}
            style={this.state.errors.country ? { color: 'red' } : { color: 'transperernt' }}
          >
            {this.state.errors.country}
          </div>
          <label className={style.label}>
            Avatart:
            <input
              className={style.textField}
              type="file"
              name="picture"
              ref={this.picture}
              onChange={this.handleChange}
            />
          </label>
          <div
            className={style.errorMessage}
            style={this.state.errors.picture ? { color: 'red' } : { color: 'transperernt' }}
          >
            {this.state.errors.picture}
          </div>
          <label>
            <input className={style.checkbox} type="checkbox" name="rule" ref={this.rule} />I
            consent to my personal data
          </label>
          <div
            className={style.errorMessage}
            style={this.state.errors.rule ? { color: 'red' } : { color: 'transperernt' }}
          >
            {this.state.errors.rule}
          </div>
          <button
            className={style.button}
            type="submit"
            disabled={this.state.disableBtn ? true : false}
          >
            Registration
          </button>
        </form>
      </Container>
    );
  }
}
