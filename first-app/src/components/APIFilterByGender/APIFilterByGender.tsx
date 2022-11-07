import React from 'react';
import style from './APIFilterByGender.module.scss';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { setGenderParam, setCurrentPage } from '../../store/apiReducer';

const APIFilterByGender = () => {
  const dispatch = useAppDispatch();
  const genderParam = useAppSelector((state) => state.apiData.genderParam);

  const handleFilterGender = (e: { target: { value: string } }) => {
    dispatch(setGenderParam(e.target.value));
    dispatch(setCurrentPage(1));
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
