// import React from 'react';
// import { ICharacter } from '../APIComponent/APIComponent';
// import style from './APIModal.module.scss';
// import closeBtn from '../../assets/images/closeBtn.svg';
// import APIModalInside from 'components/APIModalInside';

// interface IAPIModal {
//   isModalActive: boolean;
//   activeItem: null | ICharacter;
//   onClick: () => void;
// }

// const APIModal = (props: IAPIModal) => {
//   return (
//     <div
//       className={props.isModalActive ? style.active : style.modal}
//       onClick={() => props.onClick()}
//     >
//       <div
//         className={props.isModalActive ? style.modalContentActive : style.modalContent}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button className={style.modalClose} onClick={() => props.onClick()}>
//           <img src={closeBtn} alt="close Btn" />
//         </button>
//         {!!props.activeItem && <APIModalInside activeCard={props.activeItem} />}
//       </div>
//     </div>
//   );
// };

// export default APIModal;

import React from 'react';
import { IItems } from '../APIComponent/APIComponent';
import style from './APIModal.module.scss';
import closeBtn from '../../assets/images/closeBtn.svg';
import APIModalInside from 'components/APIModalInside';

interface IAPIModal {
  isModalActive: boolean;
  activeItem: null | IItems;
  onClick: () => void;
}

const APIModal = (props: IAPIModal) => {
  return (
    <div
      className={props.isModalActive ? style.active : style.modal}
      onClick={() => props.onClick()}
    >
      <div
        className={props.isModalActive ? style.modalContentActive : style.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={style.modalClose} onClick={() => props.onClick()}>
          <img src={closeBtn} alt="close Btn" />
        </button>
        {!!props.activeItem && <APIModalInside activeCard={props.activeItem} />}
      </div>
    </div>
  );
};

export default APIModal;
