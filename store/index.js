import { createSlice, configureStore } from '@reduxjs/toolkit';

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

const profileMenuSlice = createSlice({
  name: 'profile-menu',
  initialState: {
    profileMenuIsOpen: false,
  },
  reducers: {
    openMenu(state) {
      state.profileMenuIsOpen = true;
    },
    closeMenu(state) {
      state.profileMenuIsOpen = false;
    },
  },
});

const store = configureStore({
  reducer: {
    mainMenu: mainMenuSlice.reducer,
    profileMenu: profileMenuSlice.reducer,
  },
});

export const mainMenuActions = mainMenuSlice.actions;
export const profileMenuActions = profileMenuSlice.actions;

export default store;
