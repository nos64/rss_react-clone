import React, { Component } from 'react';
import style from './Container.module.scss';

export interface IChildrenProps {
  children?: React.ReactNode;
}
export default class Container extends Component<IChildrenProps> {
  render() {
    return <div className={style.container}>{this.props.children}</div>;
  }
}
