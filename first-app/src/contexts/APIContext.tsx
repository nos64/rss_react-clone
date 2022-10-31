import React, { createContext, useReducer, PropsWithChildren, FC, Reducer } from 'react';
import { ContextType, IAPIGlobalAction, IAPIGlobalState } from 'types/types';
import apiReducer from './apiReducer';

export const initialState = {
  searchQuery: localStorage.getItem('searchQuery') || '',
  error: {},
  isLoaded: false,
  items: [],
  isModalActive: false,
  activeItem: null,
  responseFromServer: null,
  formCards: [],
  formCard: null,
};

export const APIContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => {},
});

export const APIProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<IAPIGlobalState, IAPIGlobalAction>>(
    apiReducer,
    initialState
  );
  return <APIContext.Provider value={{ state, dispatch }}>{children}</APIContext.Provider>;
};
