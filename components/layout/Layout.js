import { Fragment, useState } from 'react';

import Navbar from './navbar/Navbar';
import classes from './Layout.module.css';
import MobileMenu from './MobileMenu';

const Layout = props => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const showMobileMenuHandler = () => {
    setMobileMenuIsOpen(prevState => !prevState);
  };

  return (
    <Fragment>
      <Navbar hamburgerIsClicked={showMobileMenuHandler} />
      <main className={classes.main}>{props.children}</main>
      {mobileMenuIsOpen && <MobileMenu />}
    </Fragment>
  );
};

export default Layout;
