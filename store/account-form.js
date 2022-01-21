import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enteredDisplayName: '',
  enteredDisplayNameIsValid: true,
  displayNameInputIsTouched: false,
  enteredTwitterHandle: '',
  enteredTwitterHandleIsValid: true,
  twitterHandleInputIsTouched: false,
  enteredInstagramUsername: '',
  enteredInstagramUsernameIsValid: true,
  instagramUsernameInputIsTouched: false,
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
    setEnteredTwitterHandle(state, action) {
      state.enteredTwitterHandle = action.payload;
    },
    setEnteredTwitterHandleIsValid(state, action) {
      state.enteredTwitterHandleIsValid = action.payload;
    },
    setTwitterHandleInputIsTouched(state) {
      state.twitterHandleInputIsTouched = true;
    },
    setEnteredInstagramUsername(state, action) {
      state.enteredInstagramUsername = action.payload;
    },
    setEnteredInstagramUsernameIsValid(state, action) {
      state.enteredInstagramUsernameIsValid = action.payload;
    },
    setInstagramUsernameInputIsTouched(state) {
      state.instagramUsernameInputIsTouched = true;
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
    resetForm: () => initialState,
  },
});

export const accountFormActions = accountFormSlice.actions;

export default accountFormSlice.reducer;
