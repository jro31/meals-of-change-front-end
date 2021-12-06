import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from '../../../../../ui/form/form';
import FormSection from '../../../../../ui/form/FormSection';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import { loginFormActions } from '../../../../../../store/login-form';
import { loginStatusActions } from '../../../../../../store/login-status';
import { registrationModalActions } from '../../../../../../store/registration-modal';

const LoginForm = () => {
  const dispatch = useDispatch();
  const enteredEmail = useSelector(state => state.loginForm.enteredEmail);
  const enteredPassword = useSelector(state => state.loginForm.enteredPassword);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const submitHandler = async event => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/api/v1/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email: enteredEmail,
            password: enteredPassword,
          },
        }),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();

      if (data.logged_in) {
        dispatch(loginStatusActions.login());
        dispatch(registrationModalActions.closeModal());
        dispatch(loginFormActions.resetForm());
      } else {
        throw new Error('Username or Password not recognised');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // HANDLE 'isSubmitting' being true
  return (
    <Form onSubmit={submitHandler}>
      <FormSection>
        <EmailInput formError={error} setFormError={setError} />
        <PasswordInput formError={error} setFormError={setError} />
        {error && <p className='text-red-500'>{error}</p>}
        <button>Submit</button>
      </FormSection>
    </Form>
  );
};

export default LoginForm;
