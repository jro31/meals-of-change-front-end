import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  registrationModalIsOpen: false,
  activeForm: 'login',
  modalTitle: '',
  loginRedirectPath: '',
};

const registrationModalSlice = createSlice({
  name: 'registration-modal',
  initialState,
  reducers: {
    openModal(state) {
      state.registrationModalIsOpen = true;
    },
    closeModal(state) {
      state.registrationModalIsOpen = false;
      state.activeForm = 'login';
      state.modalTitle = initialState.modalTitle;
      state.loginRedirectPath = initialState.loginRedirectPath;
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
