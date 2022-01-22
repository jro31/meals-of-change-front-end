import { useSelector } from 'react-redux';

import InvasiveComponentContainer from '../../../ui/InvasiveComponentContainer';
import TwitterIcon from '../../../ui/icons/TwitterIcon';
import InstagramIcon from '../../../ui/icons/InstagramIcon';
import EmailIcon from '../../../ui/icons/EmailIcon';

const ContactModal = props => {
  const contactModalIsOpen = useSelector(state => state.contactModal.contactModalIsOpen);

  const transitionClassNames = {
    enter: '',
    enterActive: 'animate-fade-in',
    exit: '',
    exitActive: 'animate-fade-out',
  };

  return (
    <InvasiveComponentContainer
      in={contactModalIsOpen}
      showHandler={props.showHandler}
      transitionClassNames={transitionClassNames}
    >
      <div className='flex justify-center fixed inset-x-1/24 sm:inset-x-1/12 md:inset-x-1/6 lg:inset-x-1/4 xl:inset-x-1/3 top-1/4 h-fit w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-slate-800 z-30 rounded-2xl p-6'>
        <div className='flex flex-col gap-6 sm:gap-4'>
          <a href='https://twitter.com/mealsofchange' target='_blank' rel='noreferrer'>
            <div className='flex flex-col sm:flex-row items-center gap-1 sm:gap-4'>
              <TwitterIcon size='10' />
              <div className='text-lg sm:text-xl'>&#64;mealsofchange</div>
            </div>
          </a>
          <a href='https://www.instagram.com/mealsofchange' target='_blank' rel='noreferrer'>
            <div className='flex flex-col sm:flex-row items-center gap-1 sm:gap-4'>
              <InstagramIcon size='10' />
              <div className='text-lg sm:text-xl'>&#64;mealsofchange</div>
            </div>
          </a>
          {/* TODO - Add a Facebook page? */}
          <a href='mailto:contact@mealsofchange.com' target='_blank' rel='noreferrer'>
            <div className='flex flex-col sm:flex-row items-center gap-1 sm:gap-4'>
              <EmailIcon />
              <div className='text-lg sm:text-xl'>
                contact&#64;mealsofchange&#46;&#99;&#111;&#109;
              </div>
            </div>
          </a>
        </div>
      </div>
    </InvasiveComponentContainer>
  );
};

export default ContactModal;
