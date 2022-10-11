import Container from 'components/Container';
import React, { Component } from 'react';
import style from './Form.module.scss';
import { IFormCard } from './../../pages/FormPage/FormPage';
interface IFormState {
  disableBtn: boolean;
  // errors: IFormError;
  firstName: boolean;
  surname: boolean;
  dateOfBirth: boolean;
  gender: boolean;
  email: boolean;
  country: boolean;
  picture: boolean | null;
  rule: boolean;
  dataProcess: boolean;
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
      firstName: true,
      surname: true,
      dateOfBirth: true,
      gender: true,
      email: true,
      country: true,
      picture: true,
      rule: true,
      dataProcess: true,
    };
  }

  handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
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

  // validateForm = () => {
  //   let isValidForm = true;
  //   const errorMessage: IFormError = {};
  //   if (
  //     this.firstName.current.value &&
  //     !this.firstName.current.value.length &&
  //     !/^[a-zA-Zа-яА-яА-Я]+$/.test(this.firstName.current?.value)
  //   ) {
  //     isValidForm = false;
  //     errorMessage.firstName = 'Please enter your correct first name';
  //     console.log(this.firstName.current?.value);
  //   }
  // if (
  //   this.surname.current?.value &&
  //   !this.surname.current?.value.length &&
  //   !/^[a-zA-Zа-яА-яА-Я]+$/.test(this.surname.current?.value)
  // ) {
  //   isValidForm = false;
  //   errorMessage.surname = 'Please enter your correct surname name';
  // }
  // if (!this.dateOfBirth.current?.value) {
  //   isValidForm = false;
  //   errorMessage.dateOfBirth = 'Please select your date of birth';
  // }
  // if (!this.gender.current?.value) {
  //   isValidForm = false;
  //   errorMessage.gender = 'Please select your gender';
  // }
  // if (
  //   this.email.current?.value &&
  //   !this.email.current?.value.length &&
  //   !/.+@.+\..+/i.test(this.email.current?.value)
  // ) {
  //   isValidForm = false;
  //   errorMessage.email = 'Please enter correct E-mail';
  // }
  // if (this.country.current?.value) {
  //   isValidForm = false;
  //   errorMessage.country = 'Please select your country';
  // }
  // if (!this.rule.current?.checked) {
  //   isValidForm = false;
  //   errorMessage.rule = 'Please select this';
  // }
  //   this.setState({
  //     errors: errorMessage,
  //   });
  //   return isValidForm;
  // };

  render() {
    return (
      <Container>
        <form className={style.form} action="" onSubmit={this.handleSubmit}>
          <p>Registration form</p>
          <fieldset className={style.fieldset}>
            <label>
              Name:
              <input
                type="text"
                name="firstName"
                ref={this.firstName}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Surname:
              <input type="text" name="surname" ref={this.surname} onChange={this.handleChange} />
            </label>
            <label>
              Date of bith:
              <input
                type="date"
                name="dateOfBirth"
                ref={this.dateOfBirth}
                onChange={this.handleChange}
              />
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                ref={this.gender}
                onChange={this.handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                ref={this.gender}
                onChange={this.handleChange}
              />
              Female
            </label>
            <label>
              E-mail:
              <input
                type="email"
                title="Enter your e-mail"
                ref={this.email}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Country:
              <select name="country" ref={this.country} onChange={this.handleChangeSelect}>
                <option value="">--Please choose a country--</option>
                <option value="russia">Russia</option>
                <option value="belarus">Belarus</option>
                <option value="ukrane">Ukrane</option>
                <option value="kazakhstan">Kazakhstan</option>
              </select>
            </label>
            <label>
              <input type="file" name="picture" ref={this.picture} onChange={this.handleChange} />
            </label>
            <label>
              <input type="checkbox" name="rule" ref={this.rule} onChange={this.handleChange} />I
              consent to my personal data
            </label>
            <button type="submit" disabled={this.state.disableBtn ? true : false}>
              Registration
            </button>
          </fieldset>
        </form>
      </Container>
    );
  }
}
