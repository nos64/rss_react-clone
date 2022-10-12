import React, { Component } from 'react';
import style from './FormErrorMessage.module.scss';

interface Props {
  message?: string;
}

export default class FormErrorMessage extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div
        className={style.errorMessage}
        style={this.props.message ? { color: 'red' } : { color: 'transperernt' }}
      >
        {this.props.message}
      </div>
    );
  }
}
