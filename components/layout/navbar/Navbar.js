import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

import Logo from '../../ui/Logo';
import RegistrationModal from './invasive-components/registration-modal/RegistrationModal';
import MainMenu from './invasive-components/MainMenu';
import ProfileMenu from './invasive-components/ProfileMenu';
import Button from '../../ui/Button';

import { loginFormActions } from '../../../store/login-form';
import { mainMenuActions } from '../../../store/main-menu';
import { profileMenuActions } from '../../../store/profile-menu';
import { registrationModalActions } from '../../../store/registration-modal';
import { signUpFormActions } from '../../../store/sign-up-form';

import profileIcon from '../../../public/icons/profile.svg';
import SearchBar from './SearchBar';

const Navbar = () => {
  const dispatch = useDispatch();
  const registrationModalIsOpen = useSelector(
    state => state.registrationModal.registrationModalIsOpen
  );
  const mainMenuIsOpen = useSelector(state => state.mainMenu.mainMenuIsOpen);
  const profileMenuIsOpen = useSelector(state => state.profileMenu.profileMenuIsOpen);
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
            // TODO - Can the background colour be more angelic? (perhaps a 1px x 1px element behind the image, with a wide box shadow)
            <div className='flex justify-center items-center rounded-full w-50px h-50px bg-white/40 '>
              <div className='relative w-40px h-40px'>
                <Image
                  onClick={showProfileMenuHandler}
                  src={profileIcon}
                  alt='Profile icon'
                  layout='fill'
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <RegistrationModal showHandler={showRegistrationModalHandler} />
      <MainMenu showHandler={showMainMenuHandler} />
      <ProfileMenu showHandler={showProfileMenuHandler} />
    </Fragment>
  );
};

export default Navbar;
