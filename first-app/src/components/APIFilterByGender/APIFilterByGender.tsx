import React, { useContext } from 'react';
import { GlobalContext } from 'contexts/GlobalContext';
import style from './APIFilterByGender.module.scss';

interface IfilterByGenderProps {
  filterByGender: (statusParam: string) => void;
}
const APIFilterByGender = (props: IfilterByGenderProps) => {
  const { state, dispatch } = useContext(GlobalContext);
  const { items, genderParam } = state;

  const handleFilterGender = (e: { target: { value: string } }) => {
    dispatch({ type: 'genderParam', payload: e.target.value });
    dispatch({ type: 'currentPage', payload: 1 });
    props.filterByGender(e.target.value);
  };
  return (
    <label className={style.label}>
      Filter by Gender:
      <select
        className={style.textField}
        name="gender"
        onChange={handleFilterGender}
        value={genderParam}
      >
        <option value="">--Select gender--</option>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="genderless">genderless</option>
        <option value="unknown">unknown</option>
      </select>
    </label>
  );
};

export default APIFilterByGender;
