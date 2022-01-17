import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shareModalIsOpen: false,
};

const shareModalSlice = createSlice({
  name: 'share-modal',
  initialState,
  reducers: {
    openModal(state) {
      state.shareModalIsOpen = true;
    },
    closeModal(state) {
      state.shareModalIsOpen = false;
    },
  },
});

export const shareModalActions = shareModalSlice.actions;

export default shareModalSlice.reducer;
