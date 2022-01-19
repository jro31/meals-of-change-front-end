// TODO - Handle a not logged-in user navigating to this page

import { Fragment } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';

import { accountFormActions } from '../../store/account-form';
import useInput from '../../hooks/use-input';
import Profile from '../../components/pages/account/Profile';

const AccountPage = () => {
  const enteredDisplayName = useSelector(state => state.accountForm.enteredDisplayName);

  const displayNameInputValidation = value => value.trim().length >= 4 && value.trim().length <= 20;

  const { valueChangeHandler, inputBlurHandler } = useInput(
    accountFormActions.setEnteredDisplayName,
    displayNameInputValidation,
    accountFormActions.setEnteredDisplayNameIsValid,
    accountFormActions.setDisplayNameInputIsTouched
  );

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
