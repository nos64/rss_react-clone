import React, { useContext } from 'react';
import { GlobalContext } from 'contexts/GlobalContext';
import style from './APIFilterByStatus.module.scss';

interface IfilterByStatusProps {
  filterByStatus: (statusParam: string) => void;
}
const APIFilterByStatus = (props: IfilterByStatusProps) => {
  const { state, dispatch } = useContext(GlobalContext);
  const { statusParam } = state;

  const handleFilterStatus = (e: { target: { value: string } }) => {
    dispatch({ type: 'statusParam', payload: e.target.value });
    props.filterByStatus(e.target.value);
    dispatch({ type: 'currentPage', payload: 1 });
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
