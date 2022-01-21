import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Profile from '../../components/pages/account/Profile';

const AccountPage = () => {
  const router = useRouter();
  const isLoggedIn = useSelector(state => state.loginStatus.loggedInStatus === 'LOGGED_IN');
  const loginStatusChecked = useSelector(state => state.loginStatus.statusChecked);

  useEffect(() => {
    console.log(isLoggedIn);

    if (loginStatusChecked && !isLoggedIn) {
      router.replace(`/`);
    }
  }, [loginStatusChecked, isLoggedIn, router]);

  return (
    <Fragment>
      <Head>
        <title>Account</title>
        <meta name='robots' content='noindex' />
      </Head>
      <Profile />
    </Fragment>
  );
};

export default AccountPage;
