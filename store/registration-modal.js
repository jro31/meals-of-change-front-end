import { createSlice } from '@reduxjs/toolkit';

const registrationModalSlice = createSlice({
  name: 'registration-modal',
  initialState: {
    registrationModalIsOpen: false,
  },
  reducers: {
    openModal(state) {
      state.registrationModalIsOpen = true;
    },
    closeModal(state) {
      state.registrationModalIsOpen = false;
    },
  },
});

export const registrationModalActions = registrationModalSlice.actions;

export default registrationModalSlice.reducer;
