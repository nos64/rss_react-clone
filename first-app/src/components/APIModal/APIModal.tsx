import React, { useContext } from 'react';
import style from './APIModal.module.scss';
import closeBtn from '../../assets/images/closeBtn.svg';
import APIModalInside from 'components/APIModalInside';
import { GlobalContext } from 'contexts/APIContext';

const APIModal = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { isModalActive, activeItem } = state;

  const closeModal = () => {
    dispatch({ type: 'isModalActive', payload: false });
    dispatch({ type: 'activeItem', payload: null });
  };

  return (
    <div className={isModalActive ? style.active : style.modal} onClick={closeModal}>
      <div
        className={isModalActive ? style.modalContentActive : style.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={style.modalClose} onClick={closeModal}>
          <img src={closeBtn} alt="close Btn" />
        </button>
        {!!activeItem && <APIModalInside />}
      </div>
    </div>
  );
};

export default APIModal;
