import React, { useContext } from 'react';
import { GlobalContext } from 'contexts/GlobalContext';
import style from './APIFilterByStatus.module.scss';

interface IfilterByStatusProps {
  filterByStatus: (statusParam: string) => void;
}
const APIFilterByStatus = (props: IfilterByStatusProps) => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleFilterStatus = (e: { target: { value: string } }) => {
    dispatch({ type: 'statusParam', payload: e.target.value });
    dispatch({ type: 'currentPage', payload: 1 });
    props.filterByStatus(e.target.value);
  };
  return (
    <label className={style.label}>
      Filter by Status:
      <select
        className={style.textField}
        name="gender"
        onChange={handleFilterStatus}
        value={state.statusParam}
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
