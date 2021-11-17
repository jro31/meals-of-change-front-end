import { createSlice } from '@reduxjs/toolkit';

const mainMenuSlice = createSlice({
  name: 'main-menu',
  initialState: {
    mainMenuIsOpen: false,
  },
  reducers: {
    openMenu(state) {
      state.mainMenuIsOpen = true;
    },
    closeMenu(state) {
      state.mainMenuIsOpen = false;
    },
  },
});

export const mainMenuActions = mainMenuSlice.actions;

export default mainMenuSlice.reducer;
