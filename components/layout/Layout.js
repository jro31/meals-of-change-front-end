import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loginStatusActions } from '../../store/login-status';
import Navbar from './navbar/Navbar';

const Layout = props => {
  const dispatch = useDispatch();

  const checkLoginStatus = async () => {
    const response = await fetch('http://localhost:3001/api/v1/logged_in', {
      credentials: 'include',
    });

    const data = await response.json();

    if (data.logged_in) {
      dispatch(loginStatusActions.login());
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <main className='mt-14'>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
