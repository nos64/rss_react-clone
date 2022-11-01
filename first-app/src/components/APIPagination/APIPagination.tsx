import React, { useContext } from 'react';
import style from './APIPagination.module.scss';
import { GlobalContext } from 'contexts/GlobalContext';
interface IAPIPaginationProps {
  onClick: (e: React.SyntheticEvent) => void;
  page: number;
  lastPage: number;
}

const APIPagination = ({ onClick, page, lastPage }: IAPIPaginationProps) => {
  
  const { state, dispatch } = useContext(GlobalContext);
  const { currentPage, responseFromServer } = state;
  return (
    <div className={style.paginationWrapper}>
      <div className={style.navBtns}>
        <>
          <button
            className={style.button}
            onClick={onClick}
            data-name="first"
            disabled={page === 1}
          >
            {'<<'}
          </button>
          <button className={style.button} onClick={onClick} data-name="prev" disabled={page === 1}>
            {'<'}
          </button>
        </>
      </div>
      <button
        data-name={currentPage}
        className={style.button + ' ' + (currentPage === page ? style.active : '')}
      >
        {currentPage}
      </button>
      <div className={style.navBtns}>
        <>
          <button
            className={style.button}
            onClick={onClick}
            data-name="next"
            disabled={page === responseFromServer?.info.pages}
          >
            {'>'}
          </button>
          <button
            className={style.button}
            onClick={onClick}
            data-name="last"
            disabled={page === responseFromServer?.info.pages}
          >
            {'>>'}
          </button>
        </>
      </div>
    </div>
  );
};

export default APIPagination;
