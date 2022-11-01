import React, { useContext } from 'react';
import style from './APISortByName.module.scss';
import { GlobalContext } from 'contexts/GlobalContext';

const APISortByName = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { items, sortByName } = state;

  const sortyngByName = (e: { target: { value: string } }) => {
    console.log(e.target.value);
    const itemsByNameObj = items.sort((a, b) => {
      // if (a === undefined || b === undefined) return;
      // if (e.target.value && e.target.value === 'nameAZ') {
      return a.name === b.name ? 0 : a.name > b.name ? 1 : -1;
      //   }
      //   if (e.target.value && e.target.value === 'nameZA') {
      //     return a.name === b.name ? 0 : a.name < b.name ? 1 : -1;
      //   }
    });
    dispatch({ type: 'items', payload: itemsByNameObj });
    dispatch({ type: 'sortByName', payload: e.target.value });
  };

  return (
    <label className={style.label}>
      Sort by Name:
      <select
        className={style.textField}
        name="gender"
        onChange={(e) => sortyngByName(e)}
        value={sortByName}
      >
        <option value="">--Select sort--</option>
        <option value="nameAZ">name A-Z</option>
        <option value="nameZA">name Z-A</option>
      </select>
    </label>
  );
};

export default APISortByName;
