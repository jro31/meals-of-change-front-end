import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loginStatusActions } from '../../store/login-status';
import { mainMenuActions } from '../../store/main-menu';
import Navbar from './navbar/Navbar';
import ShareModal from './ShareModal';

const Layout = props => {
  const dispatch = useDispatch();

  const checkLoginStatus = useCallback(async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/logged_in`, {
      credentials: 'include',
    });
    const data = await response.json();

    if (data.logged_in) {
      dispatch(loginStatusActions.login(data.user));
    }
    dispatch(loginStatusActions.setStatusChecked());
  }, [dispatch]);

  const loadTags = useCallback(async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/tags?limit=12`, {});

      if (!response.ok) {
        throw new Error('Unable to fetch tags');
      }

      const data = await response.json();

      dispatch(mainMenuActions.setTags(data.tags));
    } catch (error) {
      console.log('Unable to load tags');
    }
  }, [dispatch]);

  useEffect(() => {
    checkLoginStatus();
    loadTags();
  }, [checkLoginStatus, loadTags]);

  return (
    // Put any app-wide styling in this div
    <div className='text-slate-200 bg-slate-800 min-h-screen min-w-screen -z-50 fixed top-0'>
      <Navbar />
      <main className='mt-14'>{props.children}</main>
      <ShareModal />
    </div>
  );
};

export default Layout;
