import React, { useEffect, useState } from 'react';
import style from './APIComponent.module.scss';
import APIErrorMessage from 'components/APIErrorMessage';
import APIModal from 'components/APIModal';
import APISearchBar from 'components/APISearchBar';
import loader from '../..//assets/images/oval.svg';
import APICard from 'components/APICard';
import { BASE_PATH, CHARACTERS, SEARCH_PATH } from 'utills/constants';
import { IError, ICharacter, IItems } from 'types/types';

const APIComponent = () => {
  const [searchQuery, setSearchQuery] = useState<string>(localStorage.getItem('searchQuery') || '');
  const [error, setError] = useState<Partial<IError>>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<ICharacter[]>([]);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<ICharacter | null>(null);

  useEffect(() => {
    setSearchQuery(localStorage.getItem('searchQuery') || '');
    fetchData(localStorage.getItem('searchQuery') || '');
  }, []);

  useEffect(() => {
    localStorage.setItem('searchQuery', searchQuery);
  }, [searchQuery]);

  const fetchData = (searchQuery: string) => {
    fetch(`${BASE_PATH}${CHARACTERS}${SEARCH_PATH}${searchQuery}`)
      .then((res): Promise<IItems> => res.json())
      .then(
        (result: IItems) => {
          setIsLoaded(true);
          setItems(result.results);
          setSearchQuery(result.results ? searchQuery : '');
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  const handleInputChange = (e: { target: { value: string } }) => {
    setSearchQuery(e.target.value);
  };

  const getSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      fetchData(searchQuery);
    }
  };

  const handleClick = (item: ICharacter | null) => {
    setIsModalActive(!isModalActive);
    setActiveItem(!isModalActive ? item : null);
  };

  const handleCloseModal = () => {
    setIsModalActive(false);
    setActiveItem(null);
  };

  if (error) {
    return <p> Error {error.message}</p>;
  } else if (!isLoaded) {
    return <img src={loader} alt="Loader" />;
  } else {
    return (
      <>
        <h1 className={style.title} data-testid="api-title">
          API Page
        </h1>
        <APISearchBar onKeyPress={getSearch} onChange={handleInputChange} value={searchQuery} />
        {items ? (
          <ul className={style.card__list}>
            {items.map((item) => (
              <APICard
                {...item}
                key={item.id}
                isModalActive={isModalActive}
                activeItem={activeItem}
                onCardClick={() => handleClick(item)}
              />
            ))}
          </ul>
        ) : (
          <APIErrorMessage />
        )}
        <APIModal
          isModalActive={isModalActive}
          activeItem={activeItem}
          onCardClick={handleCloseModal}
        />
      </>
    );
  }
};

export default APIComponent;
