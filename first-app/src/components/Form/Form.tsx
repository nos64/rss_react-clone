import Container from 'components/Container';
import React, { Component } from 'react';
import style from './Form.module.scss';

interface IFormState {
  disableBtn: boolean;
  firstName: boolean;
  surname: boolean;
  dateOfBirth: boolean;
  gender: boolean;
  email: boolean;
  country: boolean;
  picture: boolean | null;
  rule: boolean;
}

interface IFormPropsCreate {
  createCard: (data: IFormCard) => void;
}

interface IFormCard {
  firstName: string;
  surname: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  country: string;
  picture: string;
  rule: boolean;
}
interface IFormProps {
  firstName?: string;
  surname?: string;
  dateOfBirth?: string;
  gender?: string;
  email?: string;
  country?: string;
  picture?: string;
  rule?: boolean;
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
  // form: React.RefObject<HTMLFormElement>;
  firstName: React.RefObject<HTMLInputElement>;
  surname: React.RefObject<HTMLInputElement>;
  dateOfBirth: React.RefObject<HTMLInputElement>;
  gender: React.RefObject<HTMLInputElement>;
  email: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLSelectElement>;
  picture: React.RefObject<HTMLInputElement>;
  rule: React.RefObject<HTMLInputElement>;

  constructor(props: IFormPropsCreate) {
    super(props);
    // this.form = React.createRef();
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
      picture: null,
      rule: true,
    };
  }

  // handleSubmit: React.FormEventHandler<HTMLFormElement & FormFields> = (e) => {
  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formObj = {
      firstName: this.firstName.current?.value as string,
      surname: this.surname.current?.value as string,
      dateOfBirth: this.dateOfBirth.current?.value as string,
      gender: this.gender.current?.value as string,
      email: this.email.current?.value as string,
      country: this.country.current?.value as string,
      picture: this.picture.current?.value as string,
      rule: this.rule.current?.checked as boolean,
      keyID: new Date().getTime().toString(),
    };
    this.props.createCard(formObj);

    // this.validateForm();
    // console.log(formObj);
    // e.target.reset();
  };

  validateForm = () => {
    let isValidForm = true;
    const errorMessage: IFormError = {};
    if (
      this.firstName.current?.value &&
      !this.firstName.current?.value.length &&
      !/^[a-zA-Zа-яА-яА-Я]+$/.test(this.firstName.current?.value)
    ) {
      isValidForm = false;
      errorMessage.firstName = 'Please enter your correct first name';
    }
    if (
      this.surname.current?.value &&
      !this.surname.current?.value.length &&
      !/^[a-zA-Zа-яА-яА-Я]+$/.test(this.surname.current?.value)
    ) {
      isValidForm = false;
      errorMessage.surname = 'Please enter your correct surname name';
    }
    if (this.dateOfBirth.current?.value) {
      isValidForm = false;
      errorMessage.dateOfBirth = 'Please select your date of birth';
    }
    if (this.gender.current?.value) {
      isValidForm = false;
      errorMessage.gender = 'Please select your gender';
    }
    if (
      this.email.current?.value &&
      !this.email.current?.value.length &&
      !/.+@.+\..+/i.test(this.email.current?.value)
    ) {
      isValidForm = false;
      errorMessage.email = 'Please enter correct E-mail';
    }
    if (this.country.current?.value) {
      isValidForm = false;
      errorMessage.country = 'Please select your country';
    }
    if (!this.rule.current?.checked) {
      isValidForm = false;
      errorMessage.rule = 'Please select this';
    }
    // this.setState({
    //   errors: errorMessage,
    // });
    return isValidForm;
  };

  render() {
    return (
      <Container>
        <form className={style.form} action="" onSubmit={this.handleSubmit}>
          <p>Registration form</p>
          <fieldset className={style.fieldset}>
            <label>
              Name:
              <input type="text" name="firstName" ref={this.firstName} />
            </label>
            <label>
              Surname:
              <input type="text" name="surname" ref={this.surname} />
            </label>
            <label>
              Date of bith:
              <input type="date" name="dateOfBirth" ref={this.dateOfBirth} />
            </label>
            <label>
              <input type="radio" name="gender" value="male" ref={this.gender} />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" ref={this.gender} />
              Female
            </label>
            <label>
              E-mail:
              <input type="email" title="Enter your e-mail" ref={this.email} />
            </label>
            <label>
              Country:
              <select name="country" ref={this.country}>
                <option value="">--Please choose a country--</option>
                <option value="russia">Russia</option>
                <option value="belarus">Belarus</option>
                <option value="ukrane">Ukrane</option>
                <option value="kazakhstan">Kazakhstan</option>
              </select>
            </label>
            <label>
              <input type="file" name="picture" ref={this.picture} />
              Profile picture
            </label>
            <label>
              <input type="checkbox" name="rule" ref={this.rule} />I consent to my personal data
            </label>
            <button type="submit">Registration</button>
          </fieldset>
        </form>
      </Container>
    );
  }
}
