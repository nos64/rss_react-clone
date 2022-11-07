import React, { useContext } from 'react';
// import { GlobalContext } from 'contexts/GlobalContext';
import style from './APIFilterByGender.module.scss';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import {
  setSearchQuery,
  setStatusParam,
  setGenderParam,
  setCurrentPage,
  setSortByName,
  setActivItem,
  setIsLoaded,
  setResponseFromServer,
  setItems,
} from '../../store/apiReducer';
interface IfilterByGenderProps {
  filterByGender: (statusParam: string) => void;
}

const APIFilterByGender = (props: IfilterByGenderProps) => {
  // const { state, dispatch } = useContext(GlobalContext);
  // const { genderParam } = state;
  const dispatch = useAppDispatch();
  const genderParam = useAppSelector((state) => state.apiData.genderParam);
  const currentPage = useAppSelector((state) => state.apiData.currentPage);

  const handleFilterGender = (e: { target: { value: string } }) => {
    dispatch(setGenderParam(e.target.value));
    // dispatch({ type: 'genderParam', payload: e.target.value });
    dispatch(setCurrentPage(1));
    // dispatch({ type: 'currentPage', payload: 1 });
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
