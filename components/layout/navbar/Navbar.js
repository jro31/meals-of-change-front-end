import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

import RegistrationModal from './invasive-components/registration-modal/RegistrationModal';
import MainMenu from './invasive-components/MainMenu';
import ProfileMenu from './invasive-components/ProfileMenu';
import ContactModal from './invasive-components/ContactModal';

import { loginFormActions } from '../../../store/login-form';
import { mainMenuActions } from '../../../store/main-menu';
import { profileMenuActions } from '../../../store/profile-menu';
import { registrationModalActions } from '../../../store/registration-modal';
import { signUpFormActions } from '../../../store/sign-up-form';
import { contactModalActions } from '../../../store/contact-modal';

import Logo from '../../ui/Logo';
import Button from '../../ui/Button';
import profileIcon from '../../../public/icons/profile.svg';
import SearchBar from './SearchBar';

const Navbar = () => {
  const dispatch = useDispatch();
  const registrationModalIsOpen = useSelector(
    state => state.registrationModal.registrationModalIsOpen
  );
  const mainMenuIsOpen = useSelector(state => state.mainMenu.mainMenuIsOpen);
  const profileMenuIsOpen = useSelector(state => state.profileMenu.profileMenuIsOpen);
  const contactModalIsOpen = useSelector(state => state.contactModal.contactModalIsOpen);
  const isLoggedIn = useSelector(state => state.loginStatus.loggedInStatus === 'LOGGED_IN');

  const showMainMenuHandler = () => {
    if (mainMenuIsOpen) {
      dispatch(mainMenuActions.closeMenu());
    } else {
      dispatch(mainMenuActions.openMenu());
    }
  };

  const showProfileMenuHandler = () => {
    if (profileMenuIsOpen) {
      dispatch(profileMenuActions.closeMenu());
    } else {
      dispatch(profileMenuActions.openMenu());
    }
  };

  const showRegistrationModalHandler = () => {
    if (registrationModalIsOpen) {
      dispatch(registrationModalActions.closeModal());
      dispatch(loginFormActions.resetForm());
      dispatch(signUpFormActions.resetForm());
    } else {
      dispatch(registrationModalActions.openModal());
    }
  };

  const showContactModalHandler = () => {
    if (contactModalIsOpen) {
      dispatch(contactModalActions.closeModal());
    } else {
      dispatch(mainMenuActions.closeMenu());
      dispatch(contactModalActions.openModal());
    }
  };

  return (
    <Fragment>
      <div
        className={`flex justify-between items-center h-14 px-4 fixed top-0 w-full transition-colors duration-400 ${
          mainMenuIsOpen || profileMenuIsOpen ? 'bg-slate-800' : 'bg-transparent'
        }`}
      >
        <div className='flex items-center'>
          <Logo className='cursor-pointer' onClick={showMainMenuHandler} size='50' />
        </div>
        <div className='flex items-center gap-3'>
          <div className='max-w-half-screen'>
            <SearchBar />
          </div>
          {!isLoggedIn && (
            <Button theme='plain' onClick={showRegistrationModalHandler}>
              Login
            </Button>
          )}
          {isLoggedIn && (
            <div className='relative flex justify-center items-center rounded-full w-50px h-50px'>
              <div className='relative w-40px h-40px'>
                <Image
                  onClick={showProfileMenuHandler}
                  src={profileIcon}
                  alt='Profile icon'
                  layout='fill'
                />
              </div>
              <div className='absolute inset-1/4 rounded-full bg-white blur-[10px] -z-10' />
            </div>
          )}
        </div>
      </div>
      <RegistrationModal showHandler={showRegistrationModalHandler} />
      <MainMenu
        showHandler={showMainMenuHandler}
        showContactModalHandler={showContactModalHandler}
      />
      <ProfileMenu showHandler={showProfileMenuHandler} />
      <ContactModal showHandler={showContactModalHandler} />
    </Fragment>
  );
};

export default Navbar;
