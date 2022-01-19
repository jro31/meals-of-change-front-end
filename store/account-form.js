import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enteredDisplayName: '',
  enteredDisplayNameIsValid: true,
  displayNameInputIsTouched: false,

  enteredNewPassword: '',
  enteredNewPasswordIsValid: true,
  newPasswordInputIsTouched: false,
  enteredNewPasswordConfirmation: '',
  enteredNewPasswordConfirmationIsValid: true,
  newPasswordConfirmationInputIsTouched: false,

  enteredExistingPassword: '',
  enteredExistingPasswordIsValid: false,
};

const accountFormSlice = createSlice({
  name: 'account-form',
  initialState,
  reducers: {
    setEnteredDisplayName(state, action) {
      state.enteredDisplayName = action.payload;
    },
    setEnteredDisplayNameIsValid(state, action) {
      state.enteredDisplayNameIsValid = action.payload;
    },
    setDisplayNameInputIsTouched(state) {
      state.displayNameInputIsTouched = true;
    },

    setEnteredNewPassword(state, action) {
      state.enteredNewPassword = action.payload;
    },
    setEnteredNewPasswordIsValid(state, action) {
      state.enteredNewPasswordIsValid = action.payload;
    },
    setNewPasswordInputIsTouched(state) {
      state.newPasswordInputIsTouched = true;
    },
    setEnteredNewPasswordConfirmation(state, action) {
      state.enteredNewPasswordConfirmation = action.payload;
    },
    setEnteredNewPasswordConfirmationIsValid(state, action) {
      state.enteredNewPasswordConfirmationIsValid = action.payload;
    },
    setNewPasswordConfirmationInputIsTouched(state) {
      state.newPasswordConfirmationInputIsTouched = true;
    },

    setEnteredExistingPassword(state, action) {
      state.enteredExistingPassword = action.payload;
    },
    setEnteredExistingPasswordIsValid(state, action) {
      state.enteredExistingPasswordIsValid = action.payload;
    },
    resetForm: () => initialState, // TODO - Need this?
  },
});

export const accountFormActions = accountFormSlice.actions;

export default accountFormSlice.reducer;
