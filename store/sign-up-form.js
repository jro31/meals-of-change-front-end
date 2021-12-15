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
    resetForm(state) {
      // TODO - Refactor this (see 'new-recipe-form' 'resetForm' action)
      state.enteredEmail = initialState.enteredEmail;
      state.enteredEmailIsValid = initialState.enteredEmailIsValid;
      state.emailInputIsTouched = initialState.emailInputIsTouched;
      state.enteredPassword = initialState.enteredPassword;
      state.enteredPasswordIsValid = initialState.enteredPasswordIsValid;
      state.passwordInputIsTouched = initialState.passwordInputIsTouched;
      state.enteredPasswordConfirmation = initialState.enteredPasswordConfirmation;
      state.enteredPasswordConfirmationIsValid = initialState.enteredPasswordConfirmationIsValid;
      state.passwordConfirmationInputIsTouched = initialState.passwordConfirmationInputIsTouched;
      state.enteredDisplayName = initialState.enteredDisplayName;
      state.enteredDisplayNameIsValid = initialState.enteredDisplayNameIsValid;
      state.displayNameInputIsTouched = initialState.displayNameInputIsTouched;
    },
  },
});

export const signUpFormActions = signUpFormSlice.actions;

export default signUpFormSlice.reducer;
