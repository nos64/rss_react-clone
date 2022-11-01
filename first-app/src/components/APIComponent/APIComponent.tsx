import React, { useContext, useEffect, useState } from 'react';
import style from './APIComponent.module.scss';
import APIErrorMessage from 'components/APIErrorMessage';
import APIModal from 'components/APIModal';
import APISearchBar from 'components/APISearchBar';
import loader from '../..//assets/images/oval.svg';
import APICard from 'components/APICard';
import { GlobalContext } from 'contexts/GlobalContext';
import APIFilterByGender from 'components/APIFilterByGender';
import APIFilterByStatus from 'components/APIFilterByStatus';
import APISortByName from 'components/APISortByName';
import APIPagination from 'components/APIPagination';
import APIInformationPanel from 'components/APIInformationPanel';
export interface IError {
  message: string;
  fileName: string;
  lineNumber: string;
}
export interface IItems {
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
// ${BASE_PATH}${CHARACTERS}${PAGE}${defaultPage}&{FILTER_BY_GENDER}${FILTER_BY_STATUS}${SEARCH_PATH}${searchQuery}
//https://rickandmortyapi.com/api/character/?page=1&gender=female&status=&name=
const BASE_PATH = 'https://rickandmortyapi.com/api/';
const CHARACTERS = `character/`;
const LOCATIONS = `/location`;
const EPISODES = `/episode`;
const SEARCH_PATH = '&name=';
const PAGE = '?page=';
const defaultPage = 10;
const FILTER_BY_STATUS = '&status='; //alive, dead, unknown
const FILTER_BY_GENDER = '&gender='; //female, male, genderless, unknown

const APIComponent = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const {
    searchQuery,
    isLoaded,
    isModalActive,
    activeItem,
    items,
    currentPage,
    responseFromServer,
    statusParam,
    genderParam,
    sortByName,
  } = state;
  const [error, setError] = useState<Partial<IError>>();
  useEffect(() => {
    dispatch({ type: 'searchQuery', payload: localStorage.getItem('searchQuery') || '' });
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('searchQuery', searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    fetchData();
  }, [genderParam, statusParam, sortByName, currentPage]);

  const fetchData = () => {
    const url = `${BASE_PATH}${CHARACTERS}${PAGE}${currentPage}${FILTER_BY_GENDER}${genderParam}${FILTER_BY_STATUS}${statusParam}${SEARCH_PATH}${searchQuery}`;
    // console.log(url);
    fetch(url)
      .then((res): Promise<IItems> => res.json())
      .then(
        (result: IItems) => {
          dispatch({ type: 'responseFromServer', payload: result });
          if (result.results) {
            if (sortByName) sortyngByName(result.results);
            dispatch({ type: 'isLoaded', payload: true });
            dispatch({ type: 'items', payload: result.results });
          } else {
            if (sortByName) sortyngByName(result.results);
            dispatch({ type: 'isLoaded', payload: true });
            dispatch({ type: 'items', payload: result.results });
            dispatch({ type: 'searchQuery', payload: '' });
            dispatch({ type: 'currentPage', payload: currentPage });
            dispatch({ type: 'genderParam', payload: genderParam });
            dispatch({ type: 'statusParam', payload: statusParam });
          }
        },
        (error: IError) => {
          dispatch({ type: 'isLoaded', payload: true });
          setError(error);
        }
      );
  };

  const getSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch({ type: 'searchQuery', payload: searchQuery });
      dispatch({ type: 'currentPage', payload: 1 });
      fetchData();
    }
  };

  const sortyngByName = (items: ICharacter[]) => {
    items.sort((a, b) => {
      const nameA: string = a.name?.toLocaleLowerCase() || '';
      const nameB: string = b.name?.toLocaleLowerCase() || '';
      if (sortByName && sortByName === 'nameAZ') {
        return nameA === nameB ? 0 : nameA > nameB ? 1 : -1;
      }
      if (sortByName && sortByName === 'nameZA') {
        return nameA === nameB ? 0 : nameA < nameB ? 1 : -1;
      }
      return 0;
    });
  };

  const filterByGender = () => fetchData();

  const filterByStatus = () => fetchData();

  const handleClick = (item: ICharacter | null) => {
    dispatch({ type: 'isModalActive', payload: !isModalActive });
    dispatch({ type: 'activeItem', payload: !isModalActive ? item : null });
  };

  // const handlePageChange = (e: { target: { value: string } }) => {
  const handlePageChange = (e: React.SyntheticEvent) => {
    if (e.target && e.target instanceof HTMLElement) {
      console.log(currentPage);
      console.log(e.target);
      const btnType: string | null = e.target.getAttribute('data-name');
      if (btnType) {
        if (!isNaN(+btnType)) {
          updatePage(+btnType);
        } else {
          switch (btnType) {
            case 'first':
              updatePage(1);
              break;
            case 'next':
              updatePage(currentPage + 1);
              break;
            case 'prev':
              updatePage(currentPage - 1);
              break;
            case 'last':
              updatePage(responseFromServer!.info.pages);
              break;
            default:
              null;
          }
        }
      }
    }
  };

  const updatePage = (pageNumber: number) => {
    dispatch({ type: 'currentPage', payload: pageNumber });
  };

  if (error) {
    return <p> Error {error.message}</p>;
  } else if (!isLoaded) {
    return <img src={loader} alt="Loader" />;
  } else {
    return (
      <>
        <APIInformationPanel />
        <h1 className={style.title} data-testid="api-title">
          Rick and Morty API
        </h1>
        <APISearchBar onKeyPress={getSearch} />
        <div className={style.sortAndFilter}>
          <APIFilterByGender filterByGender={filterByGender} />
          <APIFilterByStatus filterByStatus={filterByStatus} />
          <APISortByName />
        </div>
        {responseFromServer && (
          <APIPagination
            onClick={handlePageChange}
            page={currentPage}
            lastPage={responseFromServer.info.pages}
          />
        )}
        {items ? (
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
        ) : (
          <APIErrorMessage />
        )}
        <APIModal />
      </>
    );
  }
};

export default APIComponent;
