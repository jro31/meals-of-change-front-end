import { Fragment } from 'react';

import Navbar from './Navbar';
import classes from './Layout.module.css';

const Layout = props => {
  return (
    <Fragment>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
