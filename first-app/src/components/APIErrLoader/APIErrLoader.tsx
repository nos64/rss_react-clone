import React, { useContext } from 'react';
import { Link, redirect } from 'react-router-dom';
import { GlobalContext } from 'contexts/GlobalContext';

const APIErrLoader = () => {
  const { state, dispatch } = useContext(GlobalContext);
  dispatch({ type: 'reset' });
  return <Link to="/">API</Link>;
};

export default APIErrLoader;
