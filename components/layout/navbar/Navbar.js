import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

import Logo from '../../ui/Logo';
import Hamburger from '../../ui/Hamburger';
import MainMenu from './menu/MainMenu';
import ProfileMenu from './ProfileMenu';
import { mainMenuActions } from '../../../store/main-menu';
import { profileMenuActions } from '../../../store/profile-menu';

import profileIcon from '../../../public/icons/profile.svg';

const Navbar = () => {
  const dispatch = useDispatch();
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
      <MainMenu showHandler={showMainMenuHandler} />
      <ProfileMenu showHandler={showProfileMenuHandler} />
    </Fragment>
  );
};

export default Navbar;
