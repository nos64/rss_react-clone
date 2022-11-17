import React from 'react';
import style from './APISortByName.module.scss';
import { setSortByName, sortyngByName } from '../../store/apiReducer';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { sortByNameEnum } from 'utils/constants';

const APISortByName = () => {
  const dispatch = useAppDispatch();
  const sortByName = useAppSelector((state) => state.apiData.sortByName);

  const handleSortingSelect = (e: { target: { value: string } }) => {
    dispatch(setSortByName(e.target.value));
    dispatch(sortyngByName(e.target.value));
  };

  return (
    <label className={style.label}>
      Sort by Name:
      <select
        className={style.textField}
        name="sotByName"
        onChange={(e) => handleSortingSelect(e)}
        value={sortByName}
      >
        <option value="">--Select sort--</option>
        <option value={sortByNameEnum.ASC}>name A-Z</option>
        <option value={sortByNameEnum.DESC}>name Z-A</option>
      </select>
    </label>
  );
};

export default APISortByName;
