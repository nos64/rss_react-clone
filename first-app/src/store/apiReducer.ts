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
  error: undefined,
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

interface fetchParams {
  currentPage: number;
  genderParam: string;
  statusParam: string;
  searchQuery: string;
}
export const fetchItemsFromApi = createAsyncThunk<
  IItems,
  Partial<fetchParams>,
  { rejectValue: string }
>(
  'apiData/fetchItemsFromApi',
  async (
    { currentPage = 1, genderParam = '', statusParam = '', searchQuery = '' },
    { rejectWithValue }
  ) => {
    const url = `${BASE_PATH}${CHARACTERS}${PAGE}${currentPage}${FILTER_BY_GENDER}${genderParam}${FILTER_BY_STATUS}${statusParam}${SEARCH_PATH}${searchQuery}`;
    const response = await fetch(url);
    if (!response.ok) {
      return rejectWithValue('Error No Characters!');
    }
    const data: IItems = await response.json();
    return data;
  }
);

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
    setActiveItem(state, action: PayloadAction<ICharacter | null>) {
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItemsFromApi.pending, (state) => {
      state.isLoaded = false;
      state.error = undefined;
    });
    builder.addCase(fetchItemsFromApi.fulfilled, (state, action) => {
      state.isLoaded = true;
      state.responseFromServer = action.payload;
      state.items = action.payload.results;
      state.searchQuery = action.payload.results ? state.searchQuery : '';
    });
    builder.addCase(fetchItemsFromApi.rejected, (state, action) => {
      state.isLoaded = true;
      state.error = action.payload;
      state.searchQuery = '';
      // state.statusParam = '';
      // state.genderParam = '';
      // state.sortByName = '';
    });
  },
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
