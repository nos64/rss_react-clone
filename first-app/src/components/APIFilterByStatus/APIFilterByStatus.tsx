import React from 'react';
import style from './APIFilterByStatus.module.scss';
import { setStatusParam, setCurrentPage } from '../../store/apiReducer';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
// interface IfilterByStatusProps {
//   filterByStatus: (statusParam: string) => void;
// }
// const APIFilterByStatus = (props: IfilterByStatusProps) => {
const APIFilterByStatus = () => {
  const dispatch = useAppDispatch();
  const statusParam = useAppSelector((state) => state.apiData.statusParam);

  const handleFilterStatus = (e: { target: { value: string } }) => {
    dispatch(setStatusParam(e.target.value));
    dispatch(setCurrentPage(1));
    // props.filterByStatus(e.target.value);
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
