import { createSlice } from '@reduxjs/toolkit';

const registrationModalSlice = createSlice({
  name: 'registration-modal',
  initialState: {
    registrationModalIsOpen: false,
    activeForm: 'login',
  },
  reducers: {
    openModal(state) {
      state.registrationModalIsOpen = true;
    },
    closeModal(state) {
      state.registrationModalIsOpen = false;
    },
    showLoginForm(state) {
      state.activeForm = 'login';
    },
    showSignUpForm(state) {
      state.activeForm = 'sign-up';
    },
  },
});

export const registrationModalActions = registrationModalSlice.actions;

export default registrationModalSlice.reducer;
