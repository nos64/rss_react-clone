import React, { useContext, useEffect } from 'react';
import { GlobalContext } from 'contexts/GlobalContext';
import style from './APISortSelect.module.scss';

const Gender = [
  {
    value: null,
    label: 'gender',
  },
  {
    value: 'female',
    label: 'female',
  },
  {
    value: 'male',
    label: 'male',
  },
  {
    value: 'genderless',
    label: 'genderless',
  },
  {
    value: 'unknown',
    label: 'unknown',
  },
];

interface ISortByGenderProps {
  sortByGender: (statusParam: string) => void;
}
const APISortSelect = (props: ISortByGenderProps) => {
  const { state, dispatch } = useContext(GlobalContext);
  const { items, genderParam } = state;

  // const handleFilterGender: React.ChangeEventHandler<HTMLSelectElement> = (
  //   e: React.ChangeEvent<HTMLSelectElement>
  // ) => {
  const handleFilterGender = (e: { target: { value: string } }) => {
    dispatch({ type: 'genderParam', payload: e.target.value });
    props.sortByGender(e.target.value);
  };
  return (
    <label className={style.label}>
      Gender:
      <select className={style.textField} name="gender" onChange={handleFilterGender}>
        <option>--Please choose a gender--</option>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="genderless">genderless</option>
        <option value="unknown">unknown</option>
      </select>
    </label>
  );
};

export default APISortSelect;
