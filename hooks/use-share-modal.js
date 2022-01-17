import { useDispatch, useSelector } from 'react-redux';

import { shareModalActions } from '../store/share-modal';

const useShareModal = () => {
  const dispatch = useDispatch();
  const shareModalIsOpen = useSelector(state => state.shareModal.shareModalIsOpen);

  const showShareModalHandler = (title, twitterUrlText, twitterHashtags, whatsAppUrlText) => {
    if (shareModalIsOpen) {
      dispatch(shareModalActions.closeModal());
    } else {
      if (title) dispatch(shareModalActions.setTitle(title));
      if (twitterUrlText) dispatch(shareModalActions.setTwitterUrlText(twitterUrlText));
      if (twitterHashtags) dispatch(shareModalActions.setTwitterHashtags(twitterHashtags));
      if (whatsAppUrlText) dispatch(shareModalActions.setWhatsAppUrlText(whatsAppUrlText));
      dispatch(shareModalActions.openModal());
    }
  };

  return showShareModalHandler;
};

export default useShareModal;
