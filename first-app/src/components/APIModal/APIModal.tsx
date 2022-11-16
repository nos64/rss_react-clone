import React, { useContext } from 'react';
import style from './APIModal.module.scss';
import closeBtn from '../../assets/images/closeBtn.svg';
import APIModalInside from 'components/APIModalInside';
import { GlobalContext } from 'contexts/GlobalContext';

const APIModal = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleCloseModal = () => {
    dispatch({ type: 'isModalActive', payload: false });
    dispatch({ type: 'activeItem', payload: null });
  };

  return (
    <div className={state.isModalActive ? style.active : style.modal} onClick={handleCloseModal}>
      <div
        className={state.isModalActive ? style.modalContentActive : style.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={style.modalClose} onClick={handleCloseModal}>
          <img src={closeBtn} alt="close Btn" />
        </button>
        {!!state.activeItem && <APIModalInside />}
      </div>
    </div>
  );
};

export default APIModal;
