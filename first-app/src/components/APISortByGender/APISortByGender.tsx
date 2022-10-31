import React, { useContext } from 'react';
import { GlobalContext } from 'contexts/GlobalContext';
import style from './APISortByGender.module.scss';

interface ISortByGenderProps {
  sortByGender: (statusParam: string) => void;
}
const APISortByGender = (props: ISortByGenderProps) => {
  const { state, dispatch } = useContext(GlobalContext);
  const { genderParam } = state;

  const handleFilterGender = (e: { target: { value: string } }) => {
    dispatch({ type: 'genderParam', payload: e.target.value });
    props.sortByGender(e.target.value);
  };
  return (
    <label className={style.label}>
      Sort by Gender:
      <select
        className={style.textField}
        name="gender"
        onChange={handleFilterGender}
        value={genderParam ? genderParam : ''}
      >
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="genderless">genderless</option>
        <option value="unknown">unknown</option>
      </select>
    </label>
  );
};

export default APISortByGender;
