import React, { useState } from 'react';
import style from './CardList.module.scss';
import { cardDB } from '../../variables/cardDB';
import Card from 'components/Card';
import { ICard } from 'components/Card/Card';
import CardModal from 'components/CardModal';

const CardList = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<ICard | null>(null);

  const handleClick = (item: ICard | null) => {
    setIsModalActive(!isModalActive);
    setActiveItem(!isModalActive ? item : null);
    console.log(activeItem);
  };

  const closeModal = () => {
    setIsModalActive(false);
    setActiveItem(null);
  };

  return (
    <>
      <ul className={style.card__list}>
        {cardDB.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            brand={card.brand}
            model={card.model}
            year={card.year}
            color={card.color}
            doors={card.doors}
            volume={card.volume}
            owners={card.owners}
            isModalActive={isModalActive}
            activeItem={activeItem}
            onClick={() => handleClick(card)}
          />
        ))}
      </ul>
      <CardModal isModalActive={isModalActive} activeItem={activeItem} onClick={closeModal} />
    </>
  );
};

export default CardList;
