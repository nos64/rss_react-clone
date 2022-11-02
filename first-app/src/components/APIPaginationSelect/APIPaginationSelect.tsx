import React, { useContext } from 'react';
import style from './APIPaginationSelect.module.scss';
import { GlobalContext } from 'contexts/GlobalContext';

const APIPaginationSelect = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { currentPage, responseFromServer } = state;

  // const handlePageChange = (e: React.SyntheticEvent) => {
  //   if (e.target && e.target instanceof HTMLElement) {
  //     const btnType: string | null = e.target.getAttribute('data-name');
  //     if (btnType) {
  //       if (!isNaN(+btnType)) {
  //         updatePage(+btnType);
  //       } else {
  //         switch (btnType) {
  //           case 'first':
  //             updatePage(1);
  //             break;
  //           case 'next':
  //             updatePage(currentPage + 1);
  //             break;
  //           case 'prev':
  //             updatePage(currentPage - 1);
  //             break;
  //           case 'last':
  //             updatePage(responseFromServer!.info.pages);
  //             break;
  //           default:
  //             null;
  //         }
  //       }
  //     }
  //   }
  // };
  const pages = [];
  for (let i = 1; i <= responseFromServer!.info.pages; i++) {
    pages.push(i);
  }

  const updatePage = (e: { target: { value: string } }) => {
    console.log(e.target.value);
    dispatch({ type: 'currentPage', payload: +e.target.value });
  };

  return (
    <label className={style.label}>
      <select className={style.textField} name="gender" onChange={updatePage} value={currentPage}>
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
