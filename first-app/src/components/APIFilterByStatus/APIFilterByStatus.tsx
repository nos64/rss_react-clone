import React, { useContext } from 'react';
// import { GlobalContext } from 'contexts/GlobalContext';
import style from './APIFilterByStatus.module.scss';
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
interface IfilterByStatusProps {
  filterByStatus: (statusParam: string) => void;
}
const APIFilterByStatus = (props: IfilterByStatusProps) => {
  // const { state, dispatch } = useContext(GlobalContext);
  // const { statusParam } = state;
  const dispatch = useAppDispatch();
  const statusParam = useAppSelector((state) => state.apiData.statusParam);
  const currentPage = useAppSelector((state) => state.apiData.currentPage);

  const handleFilterStatus = (e: { target: { value: string } }) => {
    dispatch(setGenderParam(e.target.value));
    dispatch(setCurrentPage(1));
    // dispatch({ type: 'statusParam', payload: e.target.value });
    // dispatch({ type: 'currentPage', payload: 1 });
    props.filterByStatus(e.target.value);
  };
  return (
    <label className={style.label}>
      Filter by Status:
      <select
        className={style.textField}
        name="gender"
        onChange={handleFilterStatus}
        value={statusParam}
      >
        <option value="">--Select status--</option>
        <option value="alive">alive</option>
        <option value="dead">dead</option>
        <option value="unknown">unknown</option>
      </select>
    </label>
  );
};

export default APIFilterByStatus;
