import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Form from '../../../../../ui/form/form';
import FormSection from '../../../../../ui/form/FormSection';
import EmailInput from '../EmailInput';
import PasswordInput from '../PasswordInput';
import { loginStatusActions } from '../../../../../../store/login-status';
import { registrationModalActions } from '../../../../../../store/registration-modal';
import { signUpFormActions } from '../../../../../../store/sign-up-form';
import Button from '../../../../../ui/Button';
import DisplayNameInput from './DisplayNameInput';

const SignUpForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const enteredEmail = useSelector(state => state.signUpForm.enteredEmail);
  const enteredEmailIsValid = useSelector(state => state.signUpForm.enteredEmailIsValid);
  const emailInputIsTouched = useSelector(state => state.signUpForm.emailInputIsTouched);
  const enteredPassword = useSelector(state => state.signUpForm.enteredPassword);
  const enteredPasswordIsValid = useSelector(state => state.signUpForm.enteredPasswordIsValid);
  const passwordInputIsTouched = useSelector(state => state.signUpForm.passwordInputIsTouched);
  const enteredPasswordConfirmation = useSelector(
    state => state.signUpForm.enteredPasswordConfirmation
  );
  const enteredPasswordConfirmationIsValid = useSelector(
    state => state.signUpForm.enteredPasswordConfirmationIsValid
  );
  const passwordConfirmationInputIsTouched = useSelector(
    state => state.signUpForm.passwordConfirmationInputIsTouched
  );
  const enteredDisplayName = useSelector(state => state.signUpForm.enteredDisplayName);
  const enteredDisplayNameIsValid = useSelector(
    state => state.signUpForm.enteredDisplayNameIsValid
  );
  const redirectPath = useSelector(state => state.registrationModal.loginRedirectPath);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const submitHandler = async event => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      if (formIsValid) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/registrations`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: {
              email: enteredEmail.trim(),
              password: enteredPassword.trim(),
              password_confirmation: enteredPasswordConfirmation.trim(),
              display_name: enteredDisplayName.trim(),
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
          dispatch(signUpFormActions.resetForm());
        } else {
          throw new Error(data.error_message || 'Something went wrong');
        }
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      setError(error.message);
      setIsSubmitting(false);
    }
  };

  const formIsValid = () =>
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    enteredPasswordConfirmationIsValid &&
    enteredDisplayNameIsValid;

  const disableButton = () => !formIsValid() || isSubmitting;

  // TODO - Handle 'isSubmitting' being true
  return (
    <Form onSubmit={submitHandler}>
      <FormSection>
        <EmailInput
          enteredEmail={enteredEmail}
          setEnteredEmailAction={signUpFormActions.setEnteredEmail}
          setEnteredEmailIsValidAction={signUpFormActions.setEnteredEmailIsValid}
          setEmailInputIsTouchedAction={signUpFormActions.setEmailInputIsTouched}
          enteredEmailIsValid={enteredEmailIsValid}
          inputIsTouched={emailInputIsTouched}
          formError={error}
          setFormError={setError}
        />
        <PasswordInput
          enteredPassword={enteredPassword}
          setEnteredPasswordAction={signUpFormActions.setEnteredPassword}
          setEnteredPasswordIsValidAction={signUpFormActions.setEnteredPasswordIsValid}
          setPasswordInputIsTouchedAction={signUpFormActions.setPasswordInputIsTouched}
          enteredPasswordIsValid={enteredPasswordIsValid}
          inputIsTouched={passwordInputIsTouched}
          formError={error}
          setFormError={setError}
        />
        <PasswordInput
          confirmationInput={true}
          enteredPassword={enteredPasswordConfirmation}
          setEnteredPasswordAction={signUpFormActions.setEnteredPasswordConfirmation}
          setEnteredPasswordIsValidAction={signUpFormActions.setEnteredPasswordConfirmationIsValid}
          setPasswordInputIsTouchedAction={signUpFormActions.setPasswordConfirmationInputIsTouched}
          enteredPasswordIsValid={enteredPasswordConfirmationIsValid}
          inputIsTouched={passwordConfirmationInputIsTouched}
          formError={error}
          setFormError={setError}
          initialPasswordInputValue={enteredPassword}
        />
        <DisplayNameInput formError={error} setFormError={setError} />
        {error && <p className='text-red-500'>{error}</p>}
        <Button disabled={disableButton()}>Submit</Button>
      </FormSection>
    </Form>
  );
};

export default SignUpForm;
