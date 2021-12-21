import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Form from '../../../../../ui/form/form';
import FormSection from '../../../../../ui/form/FormSection';
import EmailInput from '../EmailInput';
import PasswordInput from '../PasswordInput';
import { loginFormActions } from '../../../../../../store/login-form';
import { loginStatusActions } from '../../../../../../store/login-status';
import { registrationModalActions } from '../../../../../../store/registration-modal';
import Button from '../../../../../ui/Button';

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const enteredEmail = useSelector(state => state.loginForm.enteredEmail);
  const enteredEmailIsValid = useSelector(state => state.loginForm.enteredEmailIsValid);
  const emailInputIsTouched = useSelector(state => state.loginForm.emailInputIsTouched);
  const enteredPassword = useSelector(state => state.loginForm.enteredPassword);
  const enteredPasswordIsValid = useSelector(state => state.loginForm.enteredPasswordIsValid);
  const passwordInputIsTouched = useSelector(state => state.loginForm.passwordInputIsTouched);
  const redirectPath = useSelector(state => state.registrationModal.loginRedirectPath);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const submitHandler = async event => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/sessions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email: enteredEmail.trim(),
            password: enteredPassword.trim(),
          },
        }),
        credentials: 'include',
      });
      const data = await response.json();

      if (data && data.logged_in) {
        setIsSubmitting(false);
        dispatch(loginStatusActions.login());
        dispatch(registrationModalActions.closeModal());
        if (redirectPath) router.push(redirectPath);
        dispatch(loginFormActions.resetForm());
      } else {
        throw new Error(data.error_message || 'Something went wrong');
      }
    } catch (error) {
      setError(error.message);
      setIsSubmitting(false);
      dispatch(loginFormActions.resetForm());
    }
  };

  const formIsValid = () => enteredEmailIsValid && enteredPasswordIsValid;

  const disableButton = () => !formIsValid() || isSubmitting;

  // TODO - Handle 'isSubmitting' being true
  // See https://tailwindcss.com/docs/animation for some animations
  return (
    <Form onSubmit={submitHandler}>
      <FormSection>
        <EmailInput
          enteredEmail={enteredEmail}
          setEnteredEmailAction={loginFormActions.setEnteredEmail}
          setEnteredEmailIsValidAction={loginFormActions.setEnteredEmailIsValid}
          setEmailInputIsTouchedAction={loginFormActions.setEmailInputIsTouched}
          enteredEmailIsValid={enteredEmailIsValid}
          inputIsTouched={emailInputIsTouched}
          formError={error}
          setFormError={setError}
        />
        <PasswordInput
          loginForm={true}
          enteredPassword={enteredPassword}
          setEnteredPasswordAction={loginFormActions.setEnteredPassword}
          setEnteredPasswordIsValidAction={loginFormActions.setEnteredPasswordIsValid}
          setPasswordInputIsTouchedAction={loginFormActions.setPasswordInputIsTouched}
          enteredPasswordIsValid={enteredPasswordIsValid}
          inputIsTouched={passwordInputIsTouched}
          formError={error}
          setFormError={setError}
        />
        {error && <p className='text-red-500'>{error}</p>}
        <Button disabled={disableButton()}>Login</Button>
      </FormSection>
    </Form>
  );
};

export default LoginForm;
