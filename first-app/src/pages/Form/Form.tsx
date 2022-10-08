import Container from 'components/Container';
import React, { Component } from 'react';
import style from './Form.module.scss';

interface IForm {
  firstName?: string;
  surname?: string;
  dateOfBirth?: string;
  gender?: string;
  email?: string;
  country?: string;
  picture?: string;
  rule?: boolean;
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
export default class Form extends Component {
  form: React.RefObject<HTMLFormElement>;
  firstName: React.RefObject<HTMLInputElement>;
  surname: React.RefObject<HTMLInputElement>;
  dateOfBirth: React.RefObject<HTMLInputElement>;
  gender: React.RefObject<HTMLInputElement>;
  email: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLSelectElement>;
  picture: React.RefObject<HTMLInputElement>;
  rule: React.RefObject<HTMLInputElement>;
  constructor(props: IForm) {
    super(props);
    this.form = React.createRef();
    this.firstName = React.createRef();
    this.surname = React.createRef();
    this.dateOfBirth = React.createRef();
    this.gender = React.createRef();
    this.email = React.createRef();
    this.country = React.createRef();
    this.picture = React.createRef();
    this.rule = React.createRef();

    this.state = {
      errors: {},
      disableBtn: true,
    };
  }

  handleSubmit: React.FocusEventHandler<HTMLFormElement & FormFields> = (e) => {
    e.preventDefault();
    const formObj = {
      firstName: this.firstName.current?.value,
      surname: this.surname.current?.value,
      dateOfBirth: this.dateOfBirth.current?.value,
      gender: this.gender.current?.value,
      email: this.email.current?.value,
      country: this.country.current?.value,
      picture: this.picture.current?.value,
      rule: this.rule.current?.checked,
      keyID: new Date().getTime(),
    };

    // const form = e.currentTarget;
    // const { firstName, surname, dateOfBirth, gender, email, country, picture, rule } = form;

    // const formObj = {
    //   firstName: this.firstName.current?.value,
    //   surname: this.surname.current?.value,
    //   dateOfBirth: this.dateOfBirth.current?.value,
    //   gender: this.gender.current?.value,
    //   email: this.email.current?.value,
    //   country: this.country.current?.value,
    //   picture: this.picture.current?.value,
    //   rule: this.rule.current?.checked,
    // };
    // console.log(formObj);
  };

  render() {
    return (
      <Container>
        <form className={style.form} action="" onSubmit={this.handleSubmit}>
          <p>Registration form</p>
          <fieldset className={style.fieldset}>
            <label>
              Name:
              <input type="text" name="firstName" required ref={this.firstName} />
            </label>
            <label>
              Surname:
              <input type="text" name="surname" required ref={this.surname} />
            </label>
            <label>
              Date of bith:
              <input type="date" name="dateOfBirth" required ref={this.dateOfBirth} />
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
              <input type="email" title="Enter your e-mail" required ref={this.email} />
            </label>
            <label>
              Country:
              <select name="country" required ref={this.country}>
                <option value="">--Please choose a country--</option>
                <option value="russia">Russia</option>
                <option value="belarus">Belarus</option>
                <option value="ukrane">Ukrane</option>
                <option value="kazakhstan">Kazakhstan</option>
              </select>
            </label>
            <label>
              <input type="file" name="picture" required ref={this.picture} />
              Profile picture
            </label>
            <label>
              <input type="checkbox" name="rule" required ref={this.rule} />I consent to my personal
              data
            </label>
            <button type="submit">Registration</button>
          </fieldset>
        </form>
      </Container>
    );
  }
}
