import { useState } from 'react';
import { useSelector } from 'react-redux';

import Form from '../../../../../ui/form/form';
import FormSection from '../../../../../ui/form/FormSection';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

const LoginForm = () => {
  const enteredEmail = useSelector(state => state.loginForm.enteredEmail);
  const enteredPassword = useSelector(state => state.loginForm.enteredPassword);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const submitHandler = async event => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/sessions', {
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

      if (data.status === 'created') {
        // Close modal and redirect
      } else {
        throw new Error('Username or Password not recognised');
      }
    } catch (error) {
      setError(error.message);
    }
  };

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
