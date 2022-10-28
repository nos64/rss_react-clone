import React, { MouseEventHandler } from 'react';
import style from './APIPagination.module.scss';

interface IAPIPaginationProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  page: number;
  lastPage: number;
}

const renderPaginationBtns = (
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
  page: number,
  lastPage: number
) => {
  const startBtns = [page, page + 1, page + 2];
  const gapBtns = [page - 2, page - 1, page];
  const middleBtn = ['...'];
  const lastBtns = [lastPage - 3, lastPage - 2, lastPage - 1];

  let btnsArr = [];

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
      <button key={num} onClick={onClick} data-name={num} className={num === page ? 'active' : ''}>
        {num}
      </button>
    );
  });
};

const APIPagination = (props: IAPIPaginationProps) => {
  return (
    <div className={style.paginationWrapper}>
      {props.page !== 0 && (
        <button onClick={props.onClick} data-name="prev">
          {'<<'}
        </button>
      )}
      {renderPaginationBtns(props.onClick, props.page, props.lastPage)}
      {props.page !== props.lastPage - 1 && (
        <button onClick={props.onClick} data-name="next">
          {'>>'}
        </button>
      )}
    </div>
  );
};

export default APIPagination;
