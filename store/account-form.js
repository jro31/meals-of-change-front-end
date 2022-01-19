import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enteredDisplayName: '',
  enteredDisplayNameIsValid: false,
  displayNameInputIsTouched: false,
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
