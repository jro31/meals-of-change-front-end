import { Fragment } from 'react';

import classes from './Layout.module.css';

const Layout = props => {
  return (
    <Fragment>
      <div>NAVBAR</div>
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
