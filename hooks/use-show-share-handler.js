import { useDispatch, useSelector } from 'react-redux';

import { shareModalActions } from '../store/share-modal';

const useShowShareHandler = () => {
  const dispatch = useDispatch();
  const shareModalIsOpen = useSelector(state => state.shareModal.shareModalIsOpen);

  const showShareModalHandler = () => {
    if (shareModalIsOpen) {
      dispatch(shareModalActions.closeModal());
    } else {
      dispatch(shareModalActions.openModal());
    }
  };

  return showShareModalHandler;
};

export default useShowShareHandler;
