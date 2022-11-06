import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  BASE_PATH,
  CHARACTERS,
  PAGE,
  FILTER_BY_GENDER,
  FILTER_BY_STATUS,
  SEARCH_PATH,
} from 'utils/constants';
import { IAPIGlobalState, IError, ICharacter } from '../types/types';

const initialState: IAPIGlobalState = {
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

export const fetchItemsFromApi = createAsyncThunk(
  'itemsFromApi/fetchItemsFromApi',
  async (currentPage: number, genderParam: string, statusParam: string, searchQuery: string) => {
    const url = `${BASE_PATH}${CHARACTERS}${PAGE}${currentPage}${FILTER_BY_GENDER}${genderParam}${FILTER_BY_STATUS}${statusParam}${SEARCH_PATH}${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

const apiSlice = createSlice({
  name: 'apiData',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setStatusParam(state, action: PayloadAction<string>) {
      state.statusParam = action.payload;
    },
    setGenderParam(state, action: PayloadAction<string>) {
      state.genderParam = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSortByName(state, action: PayloadAction<string>) {
      state.sortByName = action.payload;
    },
    setActivItem(state, action: PayloadAction<ICharacter>) {
      state.activeItem = action.payload;
    },
    // createError(state, action: PayloadAction<Partial<IError>>) {
    //   state.error = action.payload;
    // },
    // changeIsLoaded(state, action: PayloadAction<boolean>) {
    //   state.isLoaded = action.payload;
    // },
  },
  extraReducers: {
    [fetchItemsFromApi.pending]: (state) => {

    },
    [fetchItemsFromApi.fulfilled]: (state) => {

    },
    [fetchItemsFromApi.rejected]: (state) => {

    },
  },
});

export const { setSearchQuery } = apiSlice.actions;
export default apiSlice.reducer;
