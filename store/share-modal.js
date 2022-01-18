import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shareModalIsOpen: false,
  title: '',
  twitterUrlText: '',
  twitterHashtags: '',
  whatsAppUrlText: '',
  mailToSubject: '',
  mailToBody: '',
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
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
    setTwitterUrlText(state, action) {
      state.twitterUrlText = action.payload;
    },
    setTwitterHashtags(state, action) {
      state.twitterHashtags = action.payload;
    },
    setWhatsAppUrlText(state, action) {
      state.whatsAppUrlText = action.payload;
    },
    setMailToSubject(state, action) {
      state.mailToSubject = action.payload;
    },
    setMailToBody(state, action) {
      state.mailToBody = action.payload;
    },
    setLinkCopiedToClipboard(state) {
      state.linkCopiedToClipboard = true;
    },
    resetModal: () => initialState,
  },
});

export const shareModalActions = shareModalSlice.actions;

export default shareModalSlice.reducer;
