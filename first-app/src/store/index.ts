import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formReducer';
import apiData from './apiReducer';

const store = configureStore({
  reducer: {
    form: formReducer,
    apiData: apiData,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
