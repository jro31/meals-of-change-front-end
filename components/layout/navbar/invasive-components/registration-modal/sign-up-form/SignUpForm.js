import { useState } from 'react';
import { useSelector } from 'react-redux';

import Form from '../../../../../ui/form/form';
import FormSection from '../../../../../ui/form/FormSection';
import EmailInput from '../EmailInput';
import { signUpFormActions } from '../../../../../../store/sign-up-form';

const SignUpForm = () => {
  const enteredEmail = useSelector(state => state.signUpForm.enteredEmail);
  const enteredEmailIsValid = useSelector(state => state.signUpForm.enteredEmailIsValid);
  const inputIsTouched = useSelector(state => state.signUpForm.emailInputIsTouched);
  const [error, setError] = useState(null);

  return (
    <Form>
      <FormSection>
        <EmailInput
          enteredEmail={enteredEmail}
          setEnteredEmailAction={signUpFormActions.setEnteredEmail}
          setEnteredEmailIsValidAction={signUpFormActions.setEnteredEmailIsValid}
          setEmailInputIsTouchedAction={signUpFormActions.setEmailInputIsTouched}
          enteredEmailIsValid={enteredEmailIsValid}
          inputIsTouched={inputIsTouched}
          formError={error}
          setFormError={setError}
        />
      </FormSection>
    </Form>
  );
};

export default SignUpForm;
