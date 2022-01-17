// TODO - Add this to other pages?
// Could have the share icon in the Navbar to allow all pages to be shared
// Could also have the share icon next to the titles on the homepage and recipes index page to share each one

import { useSelector } from 'react-redux';

import useShowShareHandler from '../../hooks/use-show-share-handler';
import InvasiveComponentContainer from '../ui/InvasiveComponentContainer';

const ShareModal = () => {
  const showShareHandler = useShowShareHandler();
  const shareModalIsOpen = useSelector(state => state.shareModal.shareModalIsOpen);

  const transitionClassNames = {
    enter: '',
    enterActive: 'animate-fade-in',
    exit: '',
    exitActive: 'animate-fade-out',
  };

  return (
    <InvasiveComponentContainer
      in={shareModalIsOpen}
      showHandler={showShareHandler}
      transitionClassNames={transitionClassNames}
    >
      <div className='flex flex-col fixed inset-x-1/24 sm:inset-x-1/12 md:inset-x-1/6 lg:inset-x-1/4 xl:inset-x-1/3 top-1/4 h-fit w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-slate-800 z-30 rounded-2xl p-4 lg:p-6 overflow-scroll'>
        SHARE MODAL
      </div>
    </InvasiveComponentContainer>
  );
};

export default ShareModal;
