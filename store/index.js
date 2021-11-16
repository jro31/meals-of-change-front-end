import { createSlice, configureStore } from '@reduxjs/toolkit';

const mainMenuSlice = createSlice({
  name: 'main-menu',
  initialState: {
    mainMenuIsOpen: false,
    // menuItemsAreVisible: false,
  },
  reducers: {
    openMenu(state) {
      state.mainMenuIsOpen = true;
    },
    // showMenuItems(state) {
    //   state.menuItemsAreVisible = true;
    // },
    closeMenu(state) {
      state.mainMenuIsOpen = false;
    },
    // hideMenuItems(state) {
    //   state.menuItemsAreVisible = false;
    // },
  },
});

const store = configureStore({
  reducer: {
    mainMenu: mainMenuSlice.reducer,
  },
});

export const mainMenuActions = mainMenuSlice.actions;

export default store;
