import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

import Flexbox from '../../styles/Flexbox';
import Logo from '../../ui/Logo';
import Hamburger from '../../ui/Hamburger';
import MainMenu from './menu/MainMenu';
import ProfileMenu from './ProfileMenu';
import { mainMenuActions, profileMenuActions } from '../../../store/index';

import classes from './Navbar.module.css';
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
      <Flexbox justifyBetween alignCenter className={classes.navbar}>
        <Flexbox alignCenter>
          <Hamburger onClick={showMainMenuHandler} className={classes.hamburger} />
          <Logo onClick={showMainMenuHandler} fontSize={'25px'} className={classes.logo} />
        </Flexbox>
        <Flexbox alignCenter>
          <div>Search bar</div>
          <Image
            onClick={showProfileMenuHandler}
            src={profileIcon}
            alt='Profile icon'
            width={30}
            height={30}
          />
        </Flexbox>
      </Flexbox>
      <MainMenu showHandler={showMainMenuHandler} />
      <ProfileMenu showHandler={showProfileMenuHandler} />
    </Fragment>
  );
};

export default Navbar;
