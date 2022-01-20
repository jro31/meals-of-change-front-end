import { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';

import Heading from '../../ui/text/Heading';
import ExistingPasswordInput from './form/ExistingPasswordInput';
import { loginStatusActions } from '../../../store/login-status';
import { accountFormActions } from '../../../store/account-form';
import Form from '../../ui/form/Form';
import DisplayNameInput from './form/DisplayNameInput';
import PasswordInputs from './form/PasswordInputs';
import TwitterHandleInput from './form/TwitterHandleInput';
import InstagramUsernameInput from './form/InstagramUsernameInput';

const Profile = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const user = useSelector(state => state.loginStatus.user);
  const enteredDisplayName = useSelector(state => state.accountForm.enteredDisplayName);
  const enteredDisplayNameIsValid = useSelector(
    state => state.accountForm.enteredDisplayNameIsValid
  );

  const enteredTwitterHandle = useSelector(state => state.accountForm.enteredTwitterHandle);
  const enteredTwitterHandleIsValid = useSelector(
    state => state.accountForm.enteredTwitterHandleIsValid
  );

  const enteredNewPassword = useSelector(state => state.accountForm.enteredNewPassword);
  const enteredNewPasswordIsValid = useSelector(
    state => state.accountForm.enteredNewPasswordIsValid
  );
  const enteredNewPasswordConfirmation = useSelector(
    state => state.accountForm.enteredNewPasswordConfirmation
  );
  const enteredNewPasswordConfirmationIsValid = useSelector(
    state => state.accountForm.enteredNewPasswordConfirmationIsValid
  );
  const enteredExistingPassword = useSelector(state => state.accountForm.enteredExistingPassword);
  const enteredExistingPasswordIsValid = useSelector(
    state => state.accountForm.enteredExistingPasswordIsValid
  );

  const parsedSocialMediaInput = value =>
    value.trim()[0] === '@' ? value.trim().substring(1) : value.trim();

  const formSubmitHandler = async event => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      if (formIsValid() && inputsHaveChanged() && enteredExistingPasswordIsValid) {
        const userObject = () => {
          let baseObject = { existing_password: enteredExistingPassword.trim() };
          if (enteredDisplayName.trim() !== user.display_name) {
            baseObject.display_name = enteredDisplayName.trim();
          }
          if (twitterHandleHasChanged()) {
            baseObject.twitter_handle = parsedSocialMediaInput(enteredTwitterHandle) || null;
          }
          if (enteredNewPassword.trim() || enteredNewPasswordConfirmation.trim()) {
            baseObject.password = enteredNewPassword.trim();
            baseObject.password_confirmation = enteredNewPasswordConfirmation.trim();
          }

          return baseObject;
        };

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/accounts/${user.id}`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user: userObject(),
            }),
            credentials: 'include',
          }
        );

        if (response.status !== 200) {
          throw new Error('response status not :ok');
        }

        const data = await response.json();

        dispatch(accountFormActions.resetForm());
        dispatch(loginStatusActions.setUser(data.user));
        setIsSubmitting(false);
        // TODO - Add an 'Updated!' message for the user?
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      setError(error.message);
      setIsSubmitting(false);
    }
  };

  const twitterHandleHasChanged = () => {
    if (parsedSocialMediaInput(enteredTwitterHandle) === '' && user.twitter_handle === null)
      return false;
    return parsedSocialMediaInput(enteredTwitterHandle) !== user.twitter_handle;
  };

  const inputsHaveChanged = () => {
    // TODO - Finish this
    return (
      enteredDisplayName.trim() !== user.display_name ||
      twitterHandleHasChanged() ||
      enteredNewPassword.trim() !== '' ||
      enteredNewPasswordConfirmation.trim() !== ''
    );
  };

  const formIsValid = () => {
    // TODO - Complete this
    return (
      enteredDisplayNameIsValid &&
      enteredTwitterHandleIsValid &&
      enteredNewPasswordIsValid &&
      enteredNewPasswordConfirmationIsValid
    );
  };

  const disableButton = () =>
    isSubmitting || !formIsValid() || !enteredExistingPasswordIsValid || !inputsHaveChanged();

  useEffect(() => {
    dispatch(accountFormActions.resetForm());
    if (Object.keys(user).length !== 0) {
      dispatch(accountFormActions.setEnteredDisplayName(user.display_name));
      dispatch(accountFormActions.setEnteredTwitterHandle(user.twitter_handle || ''));
    }
  }, [dispatch, user]);

  return (
    <Fragment>
      <div className='flex justify-center fixed top-14 inset-x-0 bottom-14 sm:bottom-16 bg-black -z-10'>
        <Form
          id='account-form'
          onSubmit={formSubmitHandler}
          className='flex flex-col basis-full md:basis-11/12 lg:basis-5/6 xl:basis-3/4 2xl:basis-2/3 bg-slate-800 rounded-2xl px-3 md:px-8 lg:px-10 pt-10'
        >
          <div className='flex'>
            <div className='flex justify-center basis-2/5'>
              <Heading>Edit profile</Heading>
            </div>
            <div className='basis-3/5'>
              <DisplayNameInput error={error} setError={setError} />
              <TwitterHandleInput
                error={error}
                setError={setError}
                parsedInput={parsedSocialMediaInput}
              />
              {/* <InstagramUsernameInput error={error} setError={setError} parsedInput={parsedSocialMediaInput} /> */}
            </div>
          </div>
          <div className='flex'>
            <div className='flex justify-center basis-2/5'>
              <Heading>Change password</Heading>
            </div>
            <div className='basis-3/5'>
              <PasswordInputs error={error} setError={setError} />
            </div>
          </div>
        </Form>
      </div>
      <div className='flex justify-center items-center fixed bottom-0 w-screen bg-slate-500 h-14 sm:h-16'>
        {/* TODO - Display 'error' (as per the recipe preview page) */}
        <div className='flex justify-end items-center basis-full md:basis-11/12 lg:basis-5/6 xl:basis-3/4 2xl:basis-2/3 px-2 sm:px-4'>
          <ExistingPasswordInput error={error} setError={setError} />
          {/* TODO - Handle isSubmitting being true */}
          <Button form='account-form' disabled={disableButton()}>
            Save changes
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
