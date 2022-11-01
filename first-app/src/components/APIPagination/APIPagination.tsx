import React, { useContext } from 'react';
import style from './APIPagination.module.scss';
import { GlobalContext } from 'contexts/GlobalContext';
interface IAPIPaginationProps {
  onClick: (e: React.SyntheticEvent) => void;
  page: number;
  lastPage: number;
}

// Пагинацию взял: https://www.youtube.com/watch?v=d2Z1D5Jvajc
const renderPaginationBtns = (
  onClick: (e: React.SyntheticEvent) => void,
  page: number,
  lastPage: number
) => {
  const startBtns = [page, page + 1, page + 2];
  const gapBtns = [page - 2, page - 1, page];
  const middleBtn = ['...'];
  const lastBtns = [lastPage - 2, lastPage - 1, lastPage];

  let btnsArr: (string | number)[] = [];

  if (page < lastPage - 6) {
    btnsArr = [...startBtns, ...middleBtn, ...lastBtns];
  } else if (page < lastPage - 4) {
    btnsArr = [...gapBtns, ...middleBtn, ...lastBtns];
  } else if (page < lastPage - 3) {
    btnsArr = [...gapBtns, ...lastBtns]; // last 6 pages
  } else {
    btnsArr = [...middleBtn, ...lastBtns]; // last 3 pages
  }

  return btnsArr.map((num) => {
    return num === '...' ? (
      num
    ) : (
      <button
        key={num}
        onClick={onClick}
        data-name={num}
        className={num === page ? style.active : ''}
      >
        {num}
      </button>
    );
  });
};

const APIPagination = ({ onClick, page, lastPage }: IAPIPaginationProps) => {
  const { state, dispatch } = useContext(GlobalContext);
  const { currentPage, responseFromServer } = state;
  return (
    <div className={style.paginationWrapper}>
      {page !== 1 && (
        <>
          <button onClick={onClick} data-name="first">
            {'<<'}
          </button>
          <button onClick={onClick} data-name="prev">
            {'<'}
          </button>
        </>
      )}
      {renderPaginationBtns(onClick, page, lastPage)}
      {page !== lastPage && (
        <>
          <button onClick={onClick} data-name="next">
            {'>'}
          </button>
          <button onClick={onClick} data-name="last">
            {'>'}
          </button>
        </>
      )}
    </div>
  );
};

export default APIPagination;
