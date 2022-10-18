import CardSimpleText from 'components/CardSimpleText';
import React, { Component } from 'react';
import { ICharacter } from '../APIComponent/APIComponent';
import style from './APIModalInside.module.scss';

interface IProps {
  activeCard: ICharacter;
}

export default class APICard extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={style.card__imageWrapper}>
          <img
            className={style.card__image}
            src={`${this.props.activeCard.image}`}
            alt={`Image ${this.props.activeCard.name}`}
          />
        </div>
        <div>
          <h3 className={style.card__title}>{this.props.activeCard.name}</h3>
          <CardSimpleText description={'Status: '} param={this.props.activeCard.status} />
          <CardSimpleText description={'Species: '} param={this.props.activeCard.species} />
          <CardSimpleText description={'Gender: '} param={this.props.activeCard.gender} />
          <CardSimpleText description={'Origin: '} param={this.props.activeCard.origin.name} />
          <CardSimpleText description={'Location: '} param={this.props.activeCard.location.name} />
        </div>
      </>
    );
  }
}
