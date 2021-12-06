import { useSelector } from 'react-redux';

import FormLine from '../../../../../ui/form/FormLine';
import Input from '../../../../../ui/form/Input';
import InputContainer from '../../../../../ui/form/InputContainer';
import { signUpFormActions } from '../../../../../../store/sign-up-form';
import useInput from '../../../../../../hooks/use-input';

const EmailInput = props => {
  const enteredEmail = useSelector(state => state.signUpForm.enteredEmail);
  const enteredEmailIsValid = useSelector(state => state.signUpForm.enteredEmailIsValid);
  const inputIsTouched = useSelector(state => state.signUpForm.emailInputIsTouched);

  const emailInputValidation = value => {
    // COMPLETE THIS
    return value.trim().length > 0;
  };

  const { valueChangeHandler, inputBlurHandler } = useInput(
    signUpFormActions.setEnteredEmail,
    emailInputValidation,
    signUpFormActions.setEnteredEmailIsValid,
    signUpFormActions.setEmailInputIsTouched,
    'email'
  );

  const inputChangeHandler = event => {
    if (props.formError) {
      props.setFormError(null);
    }
    valueChangeHandler(event);
  };

  return (
    <FormLine>
      <InputContainer>
        <Input
          type='email'
          required
          id='email'
          value={enteredEmail}
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
          label='Email'
          showError={inputIsTouched && !enteredEmailIsValid}
          errorMessage='Entered a valid email address'
        />
      </InputContainer>
    </FormLine>
  );
};

export default EmailInput;
