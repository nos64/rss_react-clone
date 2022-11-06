import React, { createContext, useReducer, PropsWithChildren, FC, Reducer } from 'react';
import { ContextType, IAPIGlobalAction, IAPIGlobalState } from 'types/types';
import apiReducer from './GlobalReducer';

export const initialState = {
  searchQuery: localStorage.getItem('searchQuery') || '',
  error: {},
  isLoaded: false,
  items: [],
  activeItem: null,
  responseFromServer: null,
  statusParam: '',
  genderParam: '',
  currentPage: 1,
  sortByName: '',
  responseErr: false,
};

export const GlobalContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => {},
});

export const GlobalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<IAPIGlobalState, IAPIGlobalAction>>(
    apiReducer,
    initialState
  );
  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};
