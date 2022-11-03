import React from 'react';
import style from './CardModal.module.scss';
import closeBtn from '../../assets/images/closeBtn.svg';
import { ICard } from 'components/Card/Card';
import CardModalInside from 'components/CardModalInside';

interface ICardModal {
  isModalActive: boolean;
  activeItem: null | ICard;
  onCardClick: () => void;
}

const CardModal = (props: ICardModal) => {
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
        {!!props.activeItem && <CardModalInside activeItem={props.activeItem} />}
      </div>
    </div>
  );
};

export default CardModal;
