import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../ui/Button';

import Heading from '../../ui/text/Heading';
import AccountForm from './AccountForm';
import ExistingPasswordInput from './form/ExistingPasswordInput';

const Profile = () => {
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const enteredDisplayNameIsValid = useSelector(
    state => state.accountForm.enteredDisplayNameIsValid
  );
  const enteredExistingPasswordIsValid = useSelector(
    state => state.accountForm.enteredExistingPasswordIsValid
  );

  const formSubmitHandler = event => {
    event.preventDefault();
    setIsSubmitting(true);

    console.log('🐳🐳🐳🐳🐳🐳🐳🐳🐳🐳🐳🐳🐳🐳🐳🐳🐳🐳🐳🐳🐳🐳🐳🐳🐳');
  };

  const formIsValid = () => {
    return enteredDisplayNameIsValid;
    // TODO - Complete this
  };

  // TODO - This should also return true if no inputs have been changed
  const disableButton = () => isSubmitting || !formIsValid() || !enteredExistingPasswordIsValid;

  return (
    <Fragment>
      <div className='flex justify-center fixed top-14 inset-x-0 bottom-14 sm:bottom-16 bg-black -z-10'>
        <div className='flex basis-full md:basis-11/12 lg:basis-5/6 xl:basis-3/4 2xl:basis-2/3 bg-slate-800 rounded-2xl px-3 md:px-8 lg:px-10 pt-10'>
          <div className='flex justify-center basis-2/5'>
            <Heading>Edit profile</Heading>
          </div>
          <div className='basis-3/5'>
            <AccountForm onSubmit={formSubmitHandler} error={error} setError={setError} />
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center fixed bottom-0 w-screen bg-slate-500 h-14 sm:h-16'>
        <div className='flex justify-end items-center basis-full md:basis-11/12 lg:basis-5/6 xl:basis-3/4 2xl:basis-2/3 px-2 sm:px-4'>
          <ExistingPasswordInput error={error} setError={setError} />
          {/* TODO - Handle isSubmitting being true */}
          <Button form='account-form' disabled={disableButton()}>
            SUBMIT
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
