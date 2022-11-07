import React, { useContext } from 'react';
import style from './APIInformationPanel.module.scss';
// import { GlobalContext } from 'contexts/GlobalContext';
import {
  setSearchQuery,
  setStatusParam,
  setGenderParam,
  setCurrentPage,
  setSortByName,
  setActivItem,
  setIsLoaded,
  setResponseFromServer,
  setItems,
} from '../../store/apiReducer';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';

const APIInformationPanel = () => {
  // const { state } = useContext(GlobalContext);
  // const { currentPage, responseFromServer } = state;
  const dispatch = useAppDispatch();
  const responseFromServer = useAppSelector((state) => state.apiData.responseFromServer);
  const currentPage = useAppSelector((state) => state.apiData.currentPage);

  return (
    <div className={style.topPanel}>
      <p>
        Find <span className={style.results}>{responseFromServer?.info.count}</span> characters
      </p>
      <p>
        Current page: <span className={style.results}>{currentPage}</span>
      </p>
      <p>
        Pages: <span className={style.results}>{responseFromServer?.info.pages}</span>
      </p>
    </div>
  );
};

export default APIInformationPanel;
