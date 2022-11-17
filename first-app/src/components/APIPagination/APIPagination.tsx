import React, { useContext } from 'react';
import style from './APIPagination.module.scss';
import { GlobalContext } from 'contexts/GlobalContext';
import APIPaginationSelect from 'components/APIPaginationSelect';

const APIPagination = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handlePageChange = (e: React.SyntheticEvent) => {
    if (e.target && e.target instanceof HTMLElement) {
      const btnType: string | null = e.target.getAttribute('data-name');
      if (btnType) {
        if (+btnType) {
          updatePage(+btnType);
        } else {
          switch (btnType) {
            case 'first':
              updatePage(1);
              break;
            case 'next':
              updatePage(state.currentPage + 1);
              break;
            case 'prev':
              updatePage(state.currentPage - 1);
              break;
            case 'last':
              updatePage(state.responseFromServer!.info.pages);
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
      <button
        className={style.button}
        onClick={handlePageChange}
        data-name="first"
        disabled={state.currentPage === 1}
      >
        {'<<'}
      </button>
      <button
        className={style.button}
        onClick={handlePageChange}
        data-name="prev"
        disabled={state.currentPage === 1}
      >
        {'<'}
      </button>
      <button data-name={state.currentPage} className={style.button + ' ' + style.active}>
        {state.currentPage}
      </button>
      <button
        className={style.button}
        onClick={handlePageChange}
        data-name="next"
        disabled={state.currentPage === state.responseFromServer?.info.pages}
      >
        {'>'}
      </button>
      <button
        className={style.button}
        onClick={handlePageChange}
        data-name="last"
        disabled={state.currentPage === state.responseFromServer?.info.pages}
      >
        {'>>'}
      </button>
      <APIPaginationSelect />
    </div>
  );
};

export default APIPagination;
