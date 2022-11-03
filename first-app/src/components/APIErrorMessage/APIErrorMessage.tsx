import React, { Component } from 'react';
import style from './APIErrorMessage.module.scss';

export default class APIErrorMessage extends Component {
  render() {
    return (
      <p className={style.errorMessage}>
        Sorry, your character not found, please try again or press
        <span className={style.enterKey}> Enter</span> to load default page
      </p>
    );
  }
}
