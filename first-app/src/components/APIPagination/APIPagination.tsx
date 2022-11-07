import React, { useContext } from 'react';
import style from './APIPagination.module.scss';
// import { GlobalContext } from 'contexts/GlobalContext';
import APIPaginationSelect from 'components/APIPaginationSelect';
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

const APIPagination = () => {
  // const { state, dispatch } = useContext(GlobalContext);
  // const { currentPage, responseFromServer } = state;
  const dispatch = useAppDispatch();
  const responseFromServer = useAppSelector((state) => state.apiData.responseFromServer);
  const currentPage = useAppSelector((state) => state.apiData.currentPage);

  const handlePageChange = (e: React.SyntheticEvent) => {
    if (e.target && e.target instanceof HTMLElement) {
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

  return (
    <div className={style.paginationWrapper}>
      <div className={style.navBtns}>
        <>
          <button
            className={style.button}
            onClick={handlePageChange}
            data-name="first"
            disabled={currentPage === 1}
          >
            {'<<'}
          </button>
          <button
            className={style.button}
            onClick={handlePageChange}
            data-name="prev"
            disabled={currentPage === 1}
          >
            {'<'}
          </button>
        </>
      </div>
      <button data-name={currentPage} className={style.button + ' ' + style.active}>
        {currentPage}
      </button>
      <div className={style.navBtns}>
        <>
          <button
            className={style.button}
            onClick={handlePageChange}
            data-name="next"
            disabled={currentPage === responseFromServer?.info.pages}
          >
            {'>'}
          </button>
          <button
            className={style.button}
            onClick={handlePageChange}
            data-name="last"
            disabled={currentPage === responseFromServer?.info.pages}
          >
            {'>>'}
          </button>
        </>
      </div>
      <APIPaginationSelect />
    </div>
  );
};

export default APIPagination;
