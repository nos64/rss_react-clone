// import CardSimpleText from 'components/CardSimpleText';
// import React from 'react';
// import { ICharacter } from '../APIComponent/APIComponent';
// import style from './APICard.module.scss';

// interface IAPICard extends ICharacter {
//   isModalActive: boolean;
//   activeItem: null | ICharacter;
//   onClick: () => void;
// }

// const APICard = (props: IAPICard) => {
//   return (
//     <li className={style.card} onClick={() => props.onClick()}>
//       <h3 className={style.card__title}>{props.name}</h3>
//       <div className={style.card__imageWrapper}>
//         <img className={style.card__image} src={`${props.image}`} alt={`Image ${props.name}`} />
//       </div>
//       <div>
//         <CardSimpleText description={'Status: '} param={props.status} />
//         <CardSimpleText description={'Species: '} param={props.species} />
//         <CardSimpleText description={'Gender: '} param={props.gender} />
//         <CardSimpleText description={'Origin: '} param={props.origin.name} />
//         <CardSimpleText description={'Location: '} param={props.location.name} />
//       </div>
//     </li>
//   );
// };

// export default APICard;

import React from 'react';
import { IItems } from '../APIComponent/APIComponent';
import style from './APICard.module.scss';

interface IAPICard {
  id: number;
  image: string;
  name: string;
  isModalActive: boolean;
  activeItem: null | IItems;
  onClick: () => void;
}

const APICard = (props: IAPICard) => {
  return (
    <li className={style.card} onClick={() => props.onClick()}>
      <h3 className={style.card__title}>{props.name}</h3>
      <div className={style.card__imageWrapper}>
        <img className={style.card__image} src={`${props.image}`} alt={`Image ${props.name}`} />
      </div>
      {/* <div>
        <CardSimpleText description={'Status: '} param={props.status} />
        <CardSimpleText description={'Species: '} param={props.species} />
        <CardSimpleText description={'Gender: '} param={props.gender} />
        <CardSimpleText description={'Origin: '} param={props.origin.name} />
        <CardSimpleText description={'Location: '} param={props.location.name} />
      </div> */}
    </li>
  );
};

export default APICard;
