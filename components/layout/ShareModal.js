// TODO - Add this to other pages?
// Could have the share icon in the Navbar to allow all pages to be shared
// Could also have the share icon next to the titles on the homepage and recipes index page to share each one

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';

import useShareModal from '../../hooks/use-share-modal';
import InvasiveComponentContainer from '../ui/InvasiveComponentContainer';
import Heading from '../ui/text/Heading';
import { shareModalActions } from '../../store/share-modal';
import LinkIcon from '../../public/icons/link.svg';
import FacebookIcon from '../../public/icons/facebook.svg';
import TwitterIcon from '../ui/icons/TwitterIcon';
import WhatsAppIcon from '../../public/icons/whatsapp.svg';
import EmailIcon from '../ui/icons/EmailIcon';

const ShareModal = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const toggleShareModalHandler = useShareModal();
  const shareModalIsOpen = useSelector(state => state.shareModal.shareModalIsOpen);
  const title = useSelector(state => state.shareModal.title);
  const twitterUrlText = useSelector(state => state.shareModal.twitterUrlText);
  const twitterHashtags = useSelector(state => state.shareModal.twitterHashtags);
  const whatsAppUrlText = useSelector(state => state.shareModal.whatsAppUrlText);
  const mailToSubject = useSelector(state => state.shareModal.mailToSubject);
  const mailToBody = useSelector(state => state.shareModal.mailToBody);
  const linkCopiedToClipboard = useSelector(state => state.shareModal.linkCopiedToClipboard);

  const transitionClassNames = {
    enter: '',
    enterActive: 'animate-fade-in',
    exit: '',
    exitActive: 'animate-fade-out',
  };

  const fullPageUrl = () => {
    return `https://mealsofchange.com${router.asPath}`;
  };

  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(fullPageUrl());
    dispatch(shareModalActions.setLinkCopiedToClipboard());
  };

  const twitterUrl = () => {
    return `https://twitter.com/intent/tweet?${
      twitterUrlText ? `text=${twitterUrlText}` : ''
    }&url=${fullPageUrl()}&via=mealsofchange${
      twitterHashtags ? `&hashtags=${twitterHashtags}` : ''
    }`;
  };

  const facebookUrl = () => {
    return `http://www.facebook.com/share.php?u=${fullPageUrl()}`;
  };

  const whatsAppUrl = () => {
    return `whatsapp://send?text=${whatsAppUrlText ? `${whatsAppUrlText}%20` : ''}${fullPageUrl()}`;
  };

  const emailUrl = () => {
    return `mailto:?&subject=${mailToSubject}&body=${mailToBody}${fullPageUrl()}`;
  };

  return (
    <InvasiveComponentContainer
      in={shareModalIsOpen}
      showHandler={toggleShareModalHandler}
      transitionClassNames={transitionClassNames}
      onExited={() => dispatch(shareModalActions.resetModal())}
    >
      <div className='flex-col justify-between items-center fixed inset-x-1/24 sm:inset-x-1/12 md:inset-x-1/6 lg:inset-x-1/4 xl:inset-x-1/3 top-1/4 h-fit w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-slate-800 z-30 rounded-2xl p-4 lg:p-6 overflow-scroll'>
        {title && <Heading className='text-center mb-5'>{title}</Heading>}
        <div className='flex justify-between items-center'>
          <div onClick={copyUrlToClipboard} className='cursor-pointer'>
            <div className='flex justify-center items-center w-10 h-10'>
              {!linkCopiedToClipboard && (
                <div className='relative w-full h-full'>
                  {/* <Image src={LinkIcon} alt='Link' layout='fill' /> */}
                  <img src='/icons/link.svg' alt='Link' className='w-full h-full' />
                </div>
              )}
              {linkCopiedToClipboard && <div className='text-center'>URL copied</div>}
            </div>
          </div>
          <a href={twitterUrl()} target='_blank' rel='noreferrer'>
            <TwitterIcon size='10' />
          </a>
          <a href={facebookUrl()} target='_blank' rel='noreferrer'>
            <div className='flex justify-center items-center w-10 h-10'>
              <div className='relative w-1/2 h-full'>
                {/* <Image src={FacebookIcon} alt='Facebook' layout='fill' /> */}
                <img src='/icons/facebook.svg' alt='Facebook' className='w-full h-full' />
              </div>
            </div>
          </a>
          <a href={whatsAppUrl()} target='_blank' rel='noreferrer'>
            <div className='flex justify-center items-center w-10 h-10'>
              <div className='relative w-full h-full'>
                {/* <Image src={WhatsAppIcon} alt='WhatsApp' layout='fill' /> */}
                <img src='/icons/whatsapp.svg' alt='WhatsApp' className='w-full h-full' />
              </div>
            </div>
          </a>
          <a href={emailUrl()} target='_blank' rel='noreferrer'>
            <EmailIcon />
          </a>
        </div>
      </div>
    </InvasiveComponentContainer>
  );
};

export default ShareModal;
