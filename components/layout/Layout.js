import { Fragment } from 'react';

import Navbar from './navbar/Navbar';

const Layout = props => {
  return (
    <Fragment>
      <Navbar />
      <main className='mt-14'>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
