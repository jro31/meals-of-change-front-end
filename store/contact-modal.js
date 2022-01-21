import { createSlice } from '@reduxjs/toolkit';

const contactModalSlice = createSlice({
  name: 'contact-modal',
  initialState: {
    contactModalIsOpen: false,
  },
  reducers: {
    openModal(state) {
      state.contactModalIsOpen = true;
    },
    closeModal(state) {
      state.contactModalIsOpen = false;
    },
  },
});

export const contactModalActions = contactModalSlice.actions;

export default contactModalSlice.reducer;
