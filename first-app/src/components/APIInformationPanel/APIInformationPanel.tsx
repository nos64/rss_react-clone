import React from 'react';
import style from './APIInformationPanel.module.scss';
import { useAppSelector } from 'hooks/hooks';

const APIInformationPanel = () => {
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
