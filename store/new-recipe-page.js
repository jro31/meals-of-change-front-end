import { createSlice } from '@reduxjs/toolkit';

const newRecipePageSlice = createSlice({
  name: 'new-recipe-page',
  initialState: {
    activeComponent: 'form',
  },
  reducers: {
    showPreview(state) {
      state.activeComponent = 'preview';
    },
    showForm(state) {
      state.activeComponent = 'form';
    },
  },
});

export const newRecipePageActions = newRecipePageSlice.actions;

export default newRecipePageSlice.reducer;
