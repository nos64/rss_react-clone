import React from 'react';
import style from './APIModal.module.scss';
import closeBtn from '../../assets/images/closeBtn.svg';
import APIModalInside from 'components/APIModalInside';
import { ICharacter } from 'types/types';

interface IAPIModal {
  isModalActive: boolean;
  activeItem: null | ICharacter;
  onCardClick: () => void;
}

const APIModal = (props: IAPIModal) => {
  return (
    <div
      className={props.isModalActive ? style.active : style.modal}
      onClick={() => props.onCardClick()}
    >
      <div
        className={props.isModalActive ? style.modalContentActive : style.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={style.modalClose} onClick={() => props.onCardClick()}>
          <img src={closeBtn} alt="close Btn" />
        </button>
        {!!props.activeItem && <APIModalInside activeCard={props.activeItem} />}
      </div>
    </div>
  );
};

export default APIModal;
