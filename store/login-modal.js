import { createSlice } from '@reduxjs/toolkit';

const loginModalSlice = createSlice({
  name: 'login-modal',
  initialState: {
    loginModalIsOpen: false,
  },
  reducers: {
    openModal(state) {
      state.loginModalIsOpen = true;
    },
    closeModal(state) {
      state.loginModalIsOpen = false;
    },
  },
});

export const loginModalActions = loginModalSlice.actions;

export default loginModalSlice.reducer;
