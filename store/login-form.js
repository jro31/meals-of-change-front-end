import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enteredEmail: '',
  enteredEmailIsValid: false,
  emailInputIsTouched: false,
  enteredPassword: '',
  enteredPasswordIsValid: false,
  passwordInputIsTouched: false,
};

const loginFormSlice = createSlice({
  name: 'login-form',
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
    resetForm: () => initialState,
  },
});

export const loginFormActions = loginFormSlice.actions;

export default loginFormSlice.reducer;
