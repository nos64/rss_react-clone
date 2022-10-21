import React, { Component } from 'react';
import style from './Container.module.scss';
import { IChildren } from 'types/types';

const Container = (props: IChildren) => {
  return <div className={style.container}>{props.children}</div>;
};

export default Container;
