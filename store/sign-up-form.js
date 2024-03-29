import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enteredEmail: '',
  enteredEmailIsValid: false,
  emailInputIsTouched: false,
  enteredPassword: '',
  enteredPasswordIsValid: false,
  passwordInputIsTouched: false,
  enteredPasswordConfirmation: '',
  enteredPasswordConfirmationIsValid: false,
  passwordConfirmationInputIsTouched: false,
  enteredDisplayName: '',
  enteredDisplayNameIsValid: false,
  displayNameInputIsTouched: false,
};

const signUpFormSlice = createSlice({
  name: 'sign-up-form',
  initialState,
  reducers: {
    setEnteredEmail(state, action) {
      state.enteredEmail = action.payload;
    },
    setEnteredEmailIsValid(state, action) {
      state.enteredEmailIsValid = action.payload;
    },
    setEmailInputIsTouched(state) {
      state.emailInputIsTouched = true;
    },
    setEnteredPassword(state, action) {
      state.enteredPassword = action.payload;
    },
    setEnteredPasswordIsValid(state, action) {
      state.enteredPasswordIsValid = action.payload;
    },
    setPasswordInputIsTouched(state) {
      state.passwordInputIsTouched = true;
    },
    setEnteredPasswordConfirmation(state, action) {
      state.enteredPasswordConfirmation = action.payload;
    },
    setEnteredPasswordConfirmationIsValid(state, action) {
      state.enteredPasswordConfirmationIsValid = action.payload;
    },
    setPasswordConfirmationInputIsTouched(state) {
      state.passwordConfirmationInputIsTouched = true;
    },
    setEnteredDisplayName(state, action) {
      state.enteredDisplayName = action.payload;
    },
    setEnteredDisplayNameIsValid(state, action) {
      state.enteredDisplayNameIsValid = action.payload;
    },
    setDisplayNameInputIsTouched(state) {
      state.displayNameInputIsTouched = true;
    },
    resetForm: () => initialState,
  },
});

export const signUpFormActions = signUpFormSlice.actions;

export default signUpFormSlice.reducer;
