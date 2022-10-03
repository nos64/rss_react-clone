import React, { Component } from 'react';
import style from './CardSimpleText.module.scss';

interface ICardSimpleTextProps {
  description: string;
  param: string;
}

export default class CardSimpleText extends Component<ICardSimpleTextProps> {
  constructor(props: ICardSimpleTextProps) {
    super(props);
  }
  render() {
    return (
      <p className={style.card__description}>
        {this.props.description} <span className={style.card__param}>{this.props.param}</span>
      </p>
    );
  }
}
