import { useState } from 'react';
import { useSelector } from 'react-redux';

import Form from '../../../../../ui/form/form';
import FormSection from '../../../../../ui/form/FormSection';
import EmailInput from '../EmailInput';
import PasswordInput from '../PasswordInput';
import { signUpFormActions } from '../../../../../../store/sign-up-form';

const SignUpForm = () => {
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // HANDLE 'isSubmitting' being true
  return (
    <Form>
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
        {error && <p className='text-red-500'>{error}</p>}
        <button>Submit</button>
      </FormSection>
    </Form>
  );
};

export default SignUpForm;
