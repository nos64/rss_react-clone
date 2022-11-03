import CardSimpleText from '../CardSimpleText';
import React, { Component } from 'react';
import style from './APICard.module.scss';
import { ICharacter } from 'types/types';

interface IAPICard extends ICharacter {
  isModalActive: boolean;
  activeItem: null | ICharacter;
  onCardClick: () => void;
}

export default class APICard extends Component<IAPICard> {
  render() {
    return (
      <li className={style.card} onClick={() => this.props.onCardClick()}>
        <h3 className={style.card__title}>{this.props.name}</h3>
        <div className={style.card__imageWrapper}>
          <img
            className={style.card__image}
            src={`${this.props.image}`}
            alt={`Image ${this.props.name}`}
          />
        </div>
        <div>
          <CardSimpleText description={'Status: '} param={this.props.status} />
          <CardSimpleText description={'Species: '} param={this.props.species} />
          <CardSimpleText description={'Gender: '} param={this.props.gender} />
          <CardSimpleText description={'Origin: '} param={this.props.origin.name} />
          <CardSimpleText description={'Location: '} param={this.props.location.name} />
        </div>
      </li>
    );
  }
}
