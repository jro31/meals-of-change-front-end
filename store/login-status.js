import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedInStatus: 'NOT_LOGGED_IN',
  user: {},
  statusChecked: false,
};

const loginStatusSlice = createSlice({
  name: 'login-status',
  initialState,
  reducers: {
    login(state, action) {
      state.loggedInStatus = 'LOGGED_IN';
      state.user = action.payload;
    },
    logout(state) {
      state.loggedInStatus = 'NOT_LOGGED_IN';
      state.user = initialState.user;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setStatusChecked(state) {
      state.statusChecked = true;
    },
  },
});

export const loginStatusActions = loginStatusSlice.actions;

export default loginStatusSlice.reducer;
