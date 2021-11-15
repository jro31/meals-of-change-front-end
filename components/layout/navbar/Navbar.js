import { Fragment, useState } from 'react';
import Flexbox from '../../styles/Flexbox';
import Logo from '../../ui/Logo';
import Hamburger from '../../ui/Hamburger';
import classes from './Navbar.module.css';
import MainMenu from '../MainMenu';

const Navbar = props => {
  const [mainMenuIsOpen, setMainMenuIsOpen] = useState(false);

  const showMainMenuHandler = () => {
    setMainMenuIsOpen(prevState => !prevState);
  };

  return (
    <Fragment>
      <Flexbox justifyBetween alignCenter className={classes.navbar}>
        <Flexbox alignCenter>
          <Hamburger clickHandler={showMainMenuHandler} className={classes.hamburger} />
          <Logo clickHandler={showMainMenuHandler} fontSize={'25px'} className={classes.logo} />
        </Flexbox>
        <Flexbox>
          <div>Search bar</div>
          <div>Sign out</div>
        </Flexbox>
      </Flexbox>
      {mainMenuIsOpen && <MainMenu />}
    </Fragment>
  );
};

export default Navbar;
