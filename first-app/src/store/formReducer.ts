import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormCard } from '../types/types';

type FormCardState = {
  formCards: IFormCard[];
};

const initialState: FormCardState = {
  formCards: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormCards(state, action: PayloadAction<IFormCard>) {
      state.formCards.push(action.payload);
    },
  },
});

export const { addFormCards } = formSlice.actions;

export default formSlice.reducer;
