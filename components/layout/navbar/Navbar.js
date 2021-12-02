import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

import Logo from '../../ui/Logo';
import Hamburger from '../../ui/Hamburger';
import LoginModal from './invasive-components/LoginModal';
import MainMenu from './invasive-components/MainMenu';
import ProfileMenu from './invasive-components/ProfileMenu';

import { loginModalActions } from '../../../store/login-modal';
import { mainMenuActions } from '../../../store/main-menu';
import { profileMenuActions } from '../../../store/profile-menu';

import profileIcon from '../../../public/icons/profile.svg';

const Navbar = () => {
  const dispatch = useDispatch();
  const loginModalIsOpen = useSelector(state => state.loginModal.loginModalIsOpen);
  const mainMenuIsOpen = useSelector(state => state.mainMenu.mainMenuIsOpen);
  const profileMenuIsOpen = useSelector(state => state.profileMenu.profileMenuIsOpen);

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

  const showLoginModalHandler = () => {
    if (loginModalIsOpen) {
      dispatch(loginModalActions.closeModal());
    } else {
      dispatch(loginModalActions.openModal());
    }
  };

  return (
    <Fragment>
      <div
        className={
          'flex justify-between items-center h-14 border-b border-gray-200 z-40 px-10 fixed top-0 w-full bg-white'
        }
      >
        <div className='flex items-center'>
          <Hamburger onClick={showMainMenuHandler} className='md:hidden' />
          <Logo onClick={showMainMenuHandler} fontSize={'25px'} className='hidden md:block' />
        </div>
        <div className='flex items-center'>
          <div onClick={showLoginModalHandler}>Login</div>
          <div>Search bar</div>
          <Image
            onClick={showProfileMenuHandler}
            src={profileIcon}
            alt='Profile icon'
            width={30}
            height={30}
          />
        </div>
      </div>
      <LoginModal showHandler={showLoginModalHandler} />
      <MainMenu showHandler={showMainMenuHandler} />
      <ProfileMenu showHandler={showProfileMenuHandler} />
    </Fragment>
  );
};

export default Navbar;
