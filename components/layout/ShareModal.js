// TODO - Add this to other pages?
// Could have the share icon in the Navbar to allow all pages to be shared
// Could also have the share icon next to the titles on the homepage and recipes index page to share each one

import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';

import useShowShareHandler from '../../hooks/use-show-share-handler';
import InvasiveComponentContainer from '../ui/InvasiveComponentContainer';
import FacebookIcon from '../../public/icons/facebook.svg';
import TwitterIcon from '../../public/icons/twitter.svg';
import WhatsAppIcon from '../../public/icons/whatsapp.svg';

const ShareModal = props => {
  const router = useRouter();
  const showShareHandler = useShowShareHandler();
  const shareModalIsOpen = useSelector(state => state.shareModal.shareModalIsOpen);

  const transitionClassNames = {
    enter: '',
    enterActive: 'animate-fade-in',
    exit: '',
    exitActive: 'animate-fade-out',
  };

  const fullPageUrl = () => {
    return `https://mealsofchange.com${router.asPath}`;
  };

  const twitterUrl = () => {
    return `https://twitter.com/intent/tweet?${
      props.twitterUrlText ? `text=${props.twitterUrlText}` : ''
    }&url=${fullPageUrl()}&via=mealsofchange${props.hashtags ? `&hashtags=${props.hashtags}` : ''}`;
  };

  const facebookUrl = () => {
    return `http://www.facebook.com/share.php?u=${fullPageUrl()}`;
  };

  const whatsAppUrl = () => {
    return `whatsapp://send?text=${
      props.whatsAppUrlText ? `${props.whatsAppUrlText}%20` : ''
    }${fullPageUrl()}`;
  };

  return (
    <InvasiveComponentContainer
      in={shareModalIsOpen}
      showHandler={showShareHandler}
      transitionClassNames={transitionClassNames}
    >
      <div className='flex justify-between items-center fixed inset-x-1/24 sm:inset-x-1/12 md:inset-x-1/6 lg:inset-x-1/4 xl:inset-x-1/3 top-1/4 h-fit w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-slate-800 z-30 rounded-2xl p-4 lg:p-6 overflow-scroll'>
        <a href={twitterUrl()} target='_blank' rel='noreferrer'>
          <div className='flex justify-center items-center w-10 h-10'>
            <div className='relative w-full h-11/12'>
              <Image src={TwitterIcon} alt='Twitter icon' layout='fill' />
            </div>
          </div>
        </a>
        <a href={facebookUrl()} target='_blank' rel='noreferrer'>
          <div className='flex justify-center items-center w-10 h-10'>
            <div className='relative w-1/2 h-full'>
              <Image src={FacebookIcon} alt='Facebook icon' layout='fill' />
            </div>
          </div>
        </a>
        <a href={whatsAppUrl()} target='_blank' rel='noreferrer'>
          <div className='flex justify-center items-center w-10 h-10'>
            <div className='relative w-full h-full'>
              <Image src={WhatsAppIcon} alt='Whatsapp icon' layout='fill' />
            </div>
          </div>
        </a>
      </div>
    </InvasiveComponentContainer>
  );
};

export default ShareModal;
