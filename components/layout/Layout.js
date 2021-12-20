import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loginStatusActions } from '../../store/login-status';
import Navbar from './navbar/Navbar';

const Layout = props => {
  const dispatch = useDispatch();

  const checkLoginStatus = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/logged_in`, {
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
    // Put any app-wide styling in this div
    <div className='text-gray-700'>
      <Navbar />
      <main className='mt-14'>{props.children}</main>
    </div>
  );
};

export default Layout;
