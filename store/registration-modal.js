import { createSlice } from '@reduxjs/toolkit';

const registrationModalSlice = createSlice({
  name: 'registration-modal',
  initialState: {
    registrationModalIsOpen: false,
    activeForm: 'login',
    modalTitle: '',
    loginRedirectPath: '',
  },
  reducers: {
    openModal(state) {
      state.registrationModalIsOpen = true;
    },
    closeModal(state) {
      state.registrationModalIsOpen = false;
      state.activeForm = 'login';
    },
    showLoginForm(state) {
      state.activeForm = 'login';
    },
    showSignUpForm(state) {
      state.activeForm = 'sign-up';
    },
    setModalTitle(state, action) {
      state.modalTitle = action.payload;
    },
    setLoginRedirectPath(state, action) {
      state.loginRedirectPath = action.payload;
    },
  },
});

export const registrationModalActions = registrationModalSlice.actions;

export default registrationModalSlice.reducer;
