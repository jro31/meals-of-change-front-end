import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Flexbox from '../../styles/Flexbox';
import Logo from '../../ui/Logo';
import Hamburger from '../../ui/Hamburger';
import classes from './Navbar.module.css';
import MainMenu from '../MainMenu';
import { mainMenuActions } from '../../../store/index';

const Navbar = props => {
  const dispatch = useDispatch();
  const mainMenuIsOpen = useSelector(state => state.mainMenu.mainMenuIsOpen);

  const showMainMenuHandler = () => {
    if (mainMenuIsOpen) {
      dispatch(mainMenuActions.closeMenu());
    } else {
      dispatch(mainMenuActions.openMenu());
    }
  };

  return (
    <Fragment>
      <Flexbox justifyBetween alignCenter className={classes.navbar}>
        <Flexbox alignCenter>
          <Hamburger onClick={showMainMenuHandler} className={classes.hamburger} />
          <Logo onClick={showMainMenuHandler} fontSize={'25px'} className={classes.logo} />
        </Flexbox>
        <Flexbox>
          <div>Search bar</div>
          <div>Sign out</div>
        </Flexbox>
      </Flexbox>
      <MainMenu />
    </Fragment>
  );
};

export default Navbar;
