import React, { useContext } from 'react';
import style from './APIInformationPanel.module.scss';
import { GlobalContext } from 'contexts/GlobalContext';
const APIInformationPanel = () => {
  const { state } = useContext(GlobalContext);
  const { currentPage, responseFromServer } = state;
  return (
    <div className={style.topPanel}>
      <p>Find {responseFromServer?.info.count} characters</p>
      <p>Current page: {currentPage}</p>
      <p>Pages: {responseFromServer?.info.pages}</p>
    </div>
  );
};

export default APIInformationPanel;
