// TODO - Handle a not logged-in user navigating to this page

import { Fragment } from 'react';
import Head from 'next/head';

import Profile from '../../components/pages/account/Profile';

const AccountPage = () => {
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
