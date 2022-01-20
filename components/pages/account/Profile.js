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
  const [updated, setUpdated] = useState(false);
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

  const enteredInstagramUsername = useSelector(state => state.accountForm.enteredInstagramUsername);
  const enteredInstagramUsernameIsValid = useSelector(
    state => state.accountForm.enteredInstagramUsernameIsValid
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
          if (instagramUsernameHasChanged()) {
            baseObject.instagram_username =
              parsedSocialMediaInput(enteredInstagramUsername) || null;
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

        setUpdated(true);

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

  const instagramUsernameHasChanged = () => {
    if (parsedSocialMediaInput(enteredInstagramUsername) === '' && user.instagram_username === null)
      return false;
    return parsedSocialMediaInput(enteredInstagramUsername) !== user.instagram_username;
  };

  const inputsHaveChanged = () => {
    return (
      enteredDisplayName.trim() !== user.display_name ||
      twitterHandleHasChanged() ||
      instagramUsernameHasChanged() ||
      enteredNewPassword.trim() !== '' ||
      enteredNewPasswordConfirmation.trim() !== ''
    );
  };

  const formIsValid = () => {
    return (
      enteredDisplayNameIsValid &&
      enteredTwitterHandleIsValid &&
      enteredInstagramUsernameIsValid &&
      enteredNewPasswordIsValid &&
      enteredNewPasswordConfirmationIsValid
    );
  };

  const disableButton = () =>
    isSubmitting || !formIsValid() || !enteredExistingPasswordIsValid || !inputsHaveChanged();

  const message = () => {
    if (error) return error;
    if (updated) return 'Profile updated';
  };

  const masterInputChangeHandler = (event, valueChangeHandler) => {
    if (error) setError(null);
    if (updated) setUpdated(false);
    valueChangeHandler(event);
  };

  useEffect(() => {
    dispatch(accountFormActions.resetForm());
    if (Object.keys(user).length !== 0) {
      dispatch(accountFormActions.setEnteredDisplayName(user.display_name));
      dispatch(accountFormActions.setEnteredTwitterHandle(user.twitter_handle || ''));
      dispatch(accountFormActions.setEnteredInstagramUsername(user.instagram_username || ''));
    }
  }, [dispatch, user]);

  return (
    <Fragment>
      <div className='flex justify-center fixed top-14 inset-x-0 bottom-20 sm:bottom-22 bg-black -z-10'>
        <Form
          id='account-form'
          onSubmit={formSubmitHandler}
          className='flex flex-col basis-full md:basis-11/12 lg:basis-5/6 xl:basis-3/4 2xl:basis-2/3 bg-slate-800 rounded-2xl px-3 md:px-8 lg:px-10 pt-10 overflow-scroll'
        >
          <div className='flex'>
            <div className='flex justify-center basis-2/5'>
              <Heading>Edit profile</Heading>
            </div>
            <div className='basis-3/5'>
              <DisplayNameInput masterInputChangeHandler={masterInputChangeHandler} />
              <TwitterHandleInput
                parsedInput={parsedSocialMediaInput}
                masterInputChangeHandler={masterInputChangeHandler}
              />
              <InstagramUsernameInput
                parsedInput={parsedSocialMediaInput}
                masterInputChangeHandler={masterInputChangeHandler}
              />
            </div>
          </div>
          <div className='flex'>
            <div className='flex justify-center basis-2/5'>
              <Heading>Change password</Heading>
            </div>
            <div className='basis-3/5'>
              <PasswordInputs masterInputChangeHandler={masterInputChangeHandler} />
            </div>
          </div>
        </Form>
      </div>
      <div className='flex justify-center items-start fixed bottom-0 w-screen bg-slate-500 h-20 sm:h-22'>
        {message() && (
          <div
            className={`absolute top-0 left-0 sm:hidden px-2 mt-1.5 text-xs ${
              error ? 'text-rose-300' : 'text-logo-green'
            }`}
          >
            {message()}
          </div>
        )}
        <div
          className={`flex ${
            message() ? 'justify-end' : 'justify-between'
          } items-end basis-full md:basis-11/12 lg:basis-5/6 xl:basis-3/4 2xl:basis-2/3 px-2 sm:px-4`}
        >
          {message() && (
            <div
              className={`hidden sm:block basis-1/3 md:basis-1/2 ${
                error ? 'text-rose-300' : 'text-logo-green'
              }`}
            >
              {message()}
            </div>
          )}
          <div
            className={`${
              message() ? 'basis-full sm:basis-2/3 md:basis-1/2' : 'basis-full'
            } flex justify-end items-end gap-2`}
          >
            <ExistingPasswordInput
              message={message()}
              masterInputChangeHandler={masterInputChangeHandler}
            />
            {/* TODO - Handle isSubmitting being true */}
            <Button
              className='min-w-[117px] sm:min-w-[125px]'
              theme='plain'
              form='account-form'
              disabled={disableButton()}
            >
              Save changes
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
