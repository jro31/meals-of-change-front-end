import { createSlice } from '@reduxjs/toolkit';

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

export const profileMenuActions = profileMenuSlice.actions;

export default profileMenuSlice.reducer;
