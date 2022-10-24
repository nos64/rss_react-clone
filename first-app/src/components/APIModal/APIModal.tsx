import React, { Component } from 'react';
import { ICharacter } from '../APIComponent/APIComponent';
import style from './APIModal.module.scss';
import closeBtn from '../../assets/images/closeBtn.svg';
import APIModalInside from '../APIModalInside';

interface IAPIModal {
  isModalActive: boolean;
  activeItem: null | ICharacter;
  onClick: () => void;
}

export default class APIModal extends Component<IAPIModal> {
  render() {
    return (
      <div
        className={this.props.isModalActive ? style.active : style.modal}
        onClick={() => this.props.onClick()}
      >
        <div
          className={this.props.isModalActive ? style.modalContentActive : style.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={style.modalClose} onClick={() => this.props.onClick()}>
            <img src={closeBtn} alt="close Btn" />
          </button>
          {this.props.activeItem ? <APIModalInside activeCard={this.props.activeItem} /> : ''}
        </div>
      </div>
    );
  }
}
