import React, { useContext } from 'react';
import style from './APISortByName.module.scss';
import { GlobalContext } from 'contexts/GlobalContext';

const APISortByName = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const sortyngByName = (e: { target: { value: string } }) => {
    dispatch({ type: 'sortByName', payload: e.target.value });
  };

  return (
    <label className={style.label}>
      Sort by Name:
      <select
        className={style.textField}
        name="sotByName"
        onChange={(e) => sortyngByName(e)}
        value={state.sortByName}
      >
        <option value="">--Select sort--</option>
        <option value="ASC">name A-Z</option>
        <option value="DESC">name Z-A</option>
      </select>
    </label>
  );
};

export default APISortByName;
