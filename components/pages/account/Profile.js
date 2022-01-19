import { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';

import Heading from '../../ui/text/Heading';
import ExistingPasswordInput from './form/ExistingPasswordInput';
import { loginStatusActions } from '../../../store/login-status';
import { accountFormActions } from '../../../store/account-form';
import Form from '../../ui/form/Form';
import DisplayNameInput from './form/DisplayNameInput';

const Profile = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const user = useSelector(state => state.loginStatus.user);
  const enteredDisplayName = useSelector(state => state.accountForm.enteredDisplayName);
  const enteredDisplayNameIsValid = useSelector(
    state => state.accountForm.enteredDisplayNameIsValid
  );
  const enteredExistingPassword = useSelector(state => state.accountForm.enteredExistingPassword);
  const enteredExistingPasswordIsValid = useSelector(
    state => state.accountForm.enteredExistingPasswordIsValid
  );

  const formSubmitHandler = async event => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      if (formIsValid() && inputsHaveChanged() && enteredExistingPasswordIsValid) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/accounts/${user.id}`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user: {
                existing_password: enteredExistingPassword.trim(),
                display_name: enteredDisplayName.trim(),
              },
            }),
            credentials: 'include',
          }
        );

        if (response.status !== 200) {
          throw new Error('response status not :ok');
        }

        const data = await response.json();

        dispatch(loginStatusActions.setUser(data.user));
        dispatch(accountFormActions.setEnteredExistingPassword(''));
        setIsSubmitting(false);
        // TODO - Clear the 'new password' fields
        // TODO - Add an 'Updated!' message for the user?
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      setError(error.message);
      setIsSubmitting(false);
    }
  };

  const inputsHaveChanged = () => {
    return enteredDisplayName !== user.display_name;
    // TODO - Finish this
  };

  const formIsValid = () => {
    return enteredDisplayNameIsValid;
    // TODO - Complete this
  };

  // TODO - This should also return true if no inputs have been changed
  const disableButton = () =>
    isSubmitting || !formIsValid() || !enteredExistingPasswordIsValid || !inputsHaveChanged();

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      dispatch(accountFormActions.setEnteredDisplayName(user.display_name));
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
            </div>
          </div>
          <div className='flex'>
            <div className='flex justify-center basis-2/5'>
              <Heading>Change password</Heading>
            </div>
            <div className='basis-3/5'>PASSWORD INPUT</div>
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
