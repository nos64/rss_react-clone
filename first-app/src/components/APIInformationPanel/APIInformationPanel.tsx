import React, { useContext } from 'react';
import style from './APIInformationPanel.module.scss';
import { GlobalContext } from 'contexts/GlobalContext';
const APIInformationPanel = () => {
  const { state } = useContext(GlobalContext);
  return (
    <div className={style.topPanel}>
      <p>
        Find <span className={style.results}>{state.responseFromServer?.info.count}</span>{' '}
        characters
      </p>
      <p>
        Current page: <span className={style.results}>{state.currentPage}</span>
      </p>
      <p>
        Pages: <span className={style.results}>{state.responseFromServer?.info.pages}</span>
      </p>
    </div>
  );
};

export default APIInformationPanel;
