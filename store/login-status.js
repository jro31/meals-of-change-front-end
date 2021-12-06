import { createSlice } from '@reduxjs/toolkit';

const loginStatusSlice = createSlice({
  name: 'login-status',
  initialState: {
    loggedInStatus: 'NOT_LOGGED_IN',
  },
  reducers: {
    login(state) {
      state.loggedInStatus = 'LOGGED_IN';
    },
    logout(state) {
      state.loggedInStatus = 'NOT_LOGGED_IN';
    },
  },
});

export const loginStatusActions = loginStatusSlice.actions;

export default loginStatusSlice.reducer;
