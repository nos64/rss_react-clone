import React, { MouseEventHandler, useEffect, useState } from 'react';
import style from './APIComponent.module.scss';
import APIErrorMessage from 'components/APIErrorMessage';
import APIModal from 'components/APIModal';
import APISearchBar from 'components/APISearchBar';
import loader from '../..//assets/images/oval.svg';
import APICard from 'components/APICard';
import APIPagination from '../APIPagination';

interface IError {
  message: string;
  fileName: string;
  lineNumber: string;
}
interface IItems {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null | number;
  };
  results: ICharacter[];
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

const BASE_PATH = 'https://rickandmortyapi.com/api';
const CHARACTERS = `${BASE_PATH}/character`;
// const LOCATIONS = `${BASE_PATH}/location`;
// const EPISODES = `${BASE_PATH}/episode`;
const SEARCH_PATH = '?name=';
const PAGE_PARAM = 'page=';

const APIComponent = () => {
  const [searchQuery, setSearchQuery] = useState<string>(localStorage.getItem('searchQuery') || '');
  const [error, setError] = useState<Partial<IError>>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<ICharacter[]>([]);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<ICharacter | null>(null);
  const [activePage, setActivePage] = useState(0);
  const [response, setResponse] = useState<IItems | null>(null);

  useEffect(() => {
    setSearchQuery(localStorage.getItem('searchQuery') || '');
    fetchData(localStorage.getItem('searchQuery') || '', activePage);
  }, []);

  useEffect(() => {
    localStorage.setItem('searchQuery', searchQuery);
  }, [searchQuery]);

  const fetchData = (searchQuery: string, activePage: number) => {
    fetch(`${CHARACTERS}${SEARCH_PATH}${searchQuery}&${PAGE_PARAM}${activePage}`)
      .then((res): Promise<IItems> => res.json())
      .then(
        (result: IItems) => {
          if (result) {
            setResponse(result);
          }
          if (result.results) {
            setIsLoaded(true);
            setItems(result.results);
          } else {
            setIsLoaded(true);
            setItems(result.results);
            setSearchQuery('');
          }
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
      setActivePage(0);
      fetchData(searchQuery, activePage);
    }
  };

  const handleClick = (item: ICharacter | null) => {
    setIsModalActive(!isModalActive);
    setActiveItem(!isModalActive ? item : null);
  };

  const closeModal = () => {
    setIsModalActive(false);
    setActiveItem(null);
  };

  const handlePageChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.target && event.target instanceof HTMLButtonElement) {
      const target = event.target;
      const BtnType: string | null = target.getAttribute('data-name');
      switch (BtnType) {
        case 'next':
          updatePage(activePage + 1);
          break;
        case 'prev':
          updatePage(activePage - 1);
          break;
        default:
          null;
      }
    }
  };

  const updatePage = (numberPage: number) => {
    setActivePage(numberPage);
    fetchData(searchQuery, numberPage);
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
        {items && response ? (
          <>
            <APIPagination
              onClick={handlePageChange}
              page={activePage}
              lastPage={response.info.pages / 20}
            />
            <ul className={style.card__list}>
              {items.map((item) => (
                <APICard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  status={item.status}
                  gender={item.gender}
                  species={item.species}
                  origin={item.origin}
                  location={item.location}
                  type={item.type}
                  episode={item.episode}
                  created={item.created}
                  url={item.url}
                  isModalActive={isModalActive}
                  activeItem={activeItem}
                  onClick={() => handleClick(item)}
                />
              ))}
            </ul>
          </>
        ) : (
          <APIErrorMessage />
        )}
        <APIModal isModalActive={isModalActive} activeItem={activeItem} onClick={closeModal} />
      </>
    );
  }
};

export default APIComponent;
