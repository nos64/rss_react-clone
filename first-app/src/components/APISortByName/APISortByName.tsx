import React from 'react';
import style from './APISortByName.module.scss';
import { reduserSortByName } from '../../store/apiReducer';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { sortByNameEnum } from 'utils/constants';

const APISortByName = () => {
  const dispatch = useAppDispatch();
  const sortByName = useAppSelector((state) => state.apiData.sortByName);

  const sortyngByName = (e: { target: { value: string } }) => {
    // dispatch(setSortByName(e.target.value));
    dispatch(reduserSortByName(e.target.value));
  };

  return (
    <label className={style.label}>
      Sort by Name:
      <select
        className={style.textField}
        name="sotByName"
        onChange={(e) => sortyngByName(e)}
        value={sortByName}
      >
        <option value="">--Select sort--</option>
        <option value={sortByNameEnum.nameAZ}>name A-Z</option>
        <option value={sortByNameEnum.nameZA}>name Z-A</option>
      </select>
    </label>
  );
};

export default APISortByName;
