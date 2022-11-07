import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  BASE_PATH,
  CHARACTERS,
  PAGE,
  FILTER_BY_GENDER,
  FILTER_BY_STATUS,
  SEARCH_PATH,
  sortByNameEnum,
} from 'utils/constants';
import { IAPIGlobalState, IError, ICharacter, IItems } from '../types/types';

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

// export const fetchItemsFromApi = createAsyncThunk(
//   'itemsFromApi/fetchItemsFromApi',
//   async (currentPage: number, genderParam: string, statusParam: string, searchQuery: string) => {
//     const url = `${BASE_PATH}${CHARACTERS}${PAGE}${currentPage}${FILTER_BY_GENDER}${genderParam}${FILTER_BY_STATUS}${statusParam}${SEARCH_PATH}${searchQuery}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   }
// );

const apiSlice = createSlice({
  name: 'apiData',
  initialState,
  reducers: {
    setIsLoaded(state, action: PayloadAction<boolean>) {
      state.isLoaded = action.payload;
    },
    setResponseFromServer(state, action: PayloadAction<IItems>) {
      state.responseFromServer = action.payload;
    },
    setItems(state, action: PayloadAction<ICharacter[]>) {
      state.items = action.payload;
    },
    setActiveItem(state, action: PayloadAction<ICharacter>) {
      state.activeItem = action.payload;
    },
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
    sortyngByName(state, action: PayloadAction<string>) {
      const sortedArr = [...state.items].sort((a, b) => {
        const nameA: string = a.name?.toLocaleLowerCase() || '';
        const nameB: string = b.name?.toLocaleLowerCase() || '';
        if (action.payload === sortByNameEnum.nameAZ) {
          return nameA === nameB ? 0 : nameA > nameB ? 1 : -1;
        }
        if (action.payload === sortByNameEnum.nameZA) {
          return nameA === nameB ? 0 : nameA < nameB ? 1 : -1;
        }
        return 0;
      });
      state.items = sortedArr;
    },
    // createError(state, action: PayloadAction<Partial<IError>>) {
    //   state.error = action.payload;
    // },
    // changeIsLoaded(state, action: PayloadAction<boolean>) {
    //   state.isLoaded = action.payload;
    // },
  },
  // extraReducers: {
  //   [fetchItemsFromApi.pending]: (state) => {

  //   },
  //   [fetchItemsFromApi.fulfilled]: (state) => {

  //   },
  //   [fetchItemsFromApi.rejected]: (state) => {

  //   },
  // },
});

export const {
  setSearchQuery,
  setStatusParam,
  setGenderParam,
  setCurrentPage,
  setSortByName,
  setActivItem,
  setIsLoaded,
  setResponseFromServer,
  setItems,
  sortyngByName,
} = apiSlice.actions;
export default apiSlice.reducer;
