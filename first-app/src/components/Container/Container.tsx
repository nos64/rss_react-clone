import React, { Component } from 'react';
import style from './Container.module.scss';
import { IChildren } from 'types/types';

export default class Container extends Component<IChildren> {
  render() {
    return <div className={style.container}>{this.props.children}</div>;
  }
}
