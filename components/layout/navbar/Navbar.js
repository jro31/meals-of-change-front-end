import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

import Logo from '../../ui/Logo';
import RegistrationModal from './invasive-components/registration-modal/RegistrationModal';
import MainMenu from './invasive-components/MainMenu';
import ProfileMenu from './invasive-components/ProfileMenu';

import { loginFormActions } from '../../../store/login-form';
import { mainMenuActions } from '../../../store/main-menu';
import { profileMenuActions } from '../../../store/profile-menu';
import { registrationModalActions } from '../../../store/registration-modal';
import { signUpFormActions } from '../../../store/sign-up-form';

import profileIcon from '../../../public/icons/profile.svg';
import Button from '../../ui/Button';

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
        className={
          'flex justify-between items-center h-14 border-b border-gray-200 z-40 px-4 fixed top-0 w-full bg-white'
        }
      >
        <div className='flex items-center'>
          <Logo onClick={showMainMenuHandler} size='50' />
        </div>
        <div className='flex items-center'>
          <div>Search bar</div>
          {!isLoggedIn && <Button onClick={showRegistrationModalHandler}>Login</Button>}
          {isLoggedIn && (
            <Image
              onClick={showProfileMenuHandler}
              src={profileIcon}
              alt='Profile icon'
              width={30}
              height={30}
            />
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
