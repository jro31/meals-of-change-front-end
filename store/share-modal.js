import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shareModalIsOpen: false,
  linkCopiedToClipboard: false,
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
      state.linkCopiedToClipboard = false;
    },
    setLinkCopiedToClipboard(state) {
      state.linkCopiedToClipboard = true;
    },
  },
});

export const shareModalActions = shareModalSlice.actions;

export default shareModalSlice.reducer;
