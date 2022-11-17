import React, { useContext } from 'react';
import style from './APIPaginationSelect.module.scss';
import { GlobalContext } from 'contexts/GlobalContext';

const APIPaginationSelect = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const pages = [];
  if (state.responseFromServer) {
    for (let i = 1; i <= state.responseFromServer.info.pages; i++) {
      pages.push(i);
    }
  }
  const updatePage = (e: { target: { value: string } }) => {
    dispatch({ type: 'currentPage', payload: +e.target.value });
  };

  return (
    <label className={style.label}>
      <select
        className={style.textField}
        name="pageNum"
        onChange={updatePage}
        value={state.currentPage}
      >
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
