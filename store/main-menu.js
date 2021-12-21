import { createSlice } from '@reduxjs/toolkit';

const mainMenuSlice = createSlice({
  name: 'main-menu',
  initialState: {
    mainMenuIsOpen: false,
    tags: [], // TODO - Set some default tags (in case they can't be loaded from the API)
  },
  reducers: {
    openMenu(state) {
      state.mainMenuIsOpen = true;
    },
    closeMenu(state) {
      state.mainMenuIsOpen = false;
    },
    setTags(state, action) {
      state.tags = action.payload;
    },
  },
});

export const mainMenuActions = mainMenuSlice.actions;

export default mainMenuSlice.reducer;
