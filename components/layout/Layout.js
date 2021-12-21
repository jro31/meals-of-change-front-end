import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loginStatusActions } from '../../store/login-status';
import { mainMenuActions } from '../../store/main-menu';
import Navbar from './navbar/Navbar';

const Layout = props => {
  const dispatch = useDispatch();

  const checkLoginStatus = useCallback(async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/logged_in`, {
      credentials: 'include',
    });
    const data = await response.json();

    if (data.logged_in) {
      dispatch(loginStatusActions.login());
    }
  }, [dispatch]);

  const loadTags = useCallback(async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/tags?limit=10`, {});

      if (!response.ok) {
        throw new Error('Unable to fetch tags');
      }

      const data = await response.json();

      dispatch(mainMenuActions.setTags(data.tags));
    } catch (error) {
      // TODO - Handle this
    }
  }, [dispatch]);

  useEffect(() => {
    checkLoginStatus();
    loadTags();
  }, [checkLoginStatus, loadTags]);

  return (
    // Put any app-wide styling in this div
    <div className='text-gray-700'>
      <Navbar />
      <main className='mt-14'>{props.children}</main>
    </div>
  );
};

export default Layout;
