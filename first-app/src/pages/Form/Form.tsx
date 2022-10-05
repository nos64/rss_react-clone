import Container from 'components/Container';
import React, { Component } from 'react';
import style from './Form.module.scss';

export default class Form extends Component {
  render() {
    return (
      <Container>
        <form className={style.form} action="">
          <p>Registration form</p>
          <fieldset className={style.fieldset}>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Surname:
              <input type="text" name="surname" required />
            </label>
            <label>
              Date of bith:
              <input type="date" name="date" required />
            </label>
            <label>
              <input type="radio" name="sex" value="male" />
              Male
            </label>
            <label>
              <input type="radio" name="sex" value="female" />
              Female
            </label>
            <label>
              E-mail:
              <input type="email" title="Enter your e-mail" required />
            </label>
            <label>
              Country:
              <select name="select" required>
                <option value="">--Please choose a country--</option>
                <option value="russia">Russia</option>
                <option value="belarus">Belarus</option>
                <option value="ukrane">Ukrane</option>
                <option value="kazakhstan">Kazakhstan</option>
              </select>
            </label>
            <label>
              <input type="file" name="picture" required />
              Profile picture
            </label>
            <label>
              <input type="checkbox" name="rule" required />I consent to my personal data
            </label>
            <button type="submit">Registration</button>
          </fieldset>
        </form>
      </Container>
    );
  }
}
