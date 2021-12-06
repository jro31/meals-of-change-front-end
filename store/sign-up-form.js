import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enteredEmail: '',
  enteredEmailIsTouched: false,
  emailInputIsTouched: false,
  enteredPassword: '',
  enteredPasswordIsValid: false,
  passwordInputIsTouched: false,
  enteredPasswordConfirmation: '',
  enteredPasswordConfirmationIsValid: false,
  passwordConfirmationInputIsTouched: false,
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
    resetForm(state) {
      state.enteredEmail = initialState.enteredEmail;
      state.enteredEmailIsValid = initialState.enteredEmailIsValid;
      state.emailInputIsTouched = initialState.emailInputIsTouched;
      state.enteredPassword = initialState.enteredPassword;
      state.enteredPasswordIsValid = initialState.enteredPasswordIsValid;
      state.passwordInputIsTouched = initialState.passwordInputIsTouched;
      state.enteredPasswordConfirmation = initialState.enteredPasswordConfirmation;
      state.enteredPasswordConfirmationIsValid = initialState.enteredPasswordConfirmationIsValid;
      state.passwordConfirmationInputIsTouched = initialState.passwordConfirmationInputIsTouched;
    },
  },
});

export const signUpFormActions = signUpFormSlice.actions;

export default signUpFormSlice.reducer;
