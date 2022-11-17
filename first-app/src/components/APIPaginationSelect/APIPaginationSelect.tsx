import React from 'react';
import style from './APIPaginationSelect.module.scss';
import { setCurrentPage } from '../../store/apiReducer';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';

const APIPaginationSelect = () => {
  const dispatch = useAppDispatch();
  const responseFromServer = useAppSelector((state) => state.apiData.responseFromServer);
  const currentPage = useAppSelector((state) => state.apiData.currentPage);

  const pages = [];
  if (responseFromServer) {
    for (let i = 1; i <= responseFromServer.info.pages; i++) {
      pages.push(i);
    }
  }

  const updatePage = (e: { target: { value: string } }) => {
    dispatch(setCurrentPage(+e.target.value));
  };

  return (
    <label className={style.label}>
      <select className={style.textField} name="pageNum" onChange={updatePage} value={currentPage}>
        {pages.map((page) => (
          <option key={page} value={page}>
            {page}
          </option>
        ))}
      </select>
    </label>
  );
};

export default APIPaginationSelect;
