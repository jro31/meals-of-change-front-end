import { useSelector } from 'react-redux';

import useInput from '../../../../../../hooks/use-input';
import FormLine from '../../../../../ui/form/FormLine';
import Input from '../../../../../ui/form/Input';
import InputContainer from '../../../../../ui/form/InputContainer';
import { loginFormActions } from '../../../../../../store/login-form';

const EmailInput = () => {
  const enteredEmail = useSelector(state => state.loginForm.enteredEmail);
  const enteredEmailIsValid = useSelector(state => state.loginForm.enteredEmailIsValid);
  const inputIsTouched = useSelector(state => state.loginForm.emailInputIsTouched);

  const emailInputValidation = value => {
    // COMPLETE THIS
    return value.trim().length > 0;
  };

  const { valueChangeHandler, inputBlurHandler } = useInput(
    loginFormActions.setEnteredEmail,
    emailInputValidation,
    loginFormActions.setEnteredEmailIsValid,
    loginFormActions.setEmailInputIsTouched,
    'email'
  );

  return (
    <FormLine>
      <InputContainer>
        <Input
          type='email'
          required
          id='email'
          value={enteredEmail}
          onChange={valueChangeHandler}
          onBlur={inputBlurHandler}
          label='Email'
          showError={inputIsTouched && !enteredEmailIsValid}
          errorMessage='Enter a valid email address'
        />
      </InputContainer>
    </FormLine>
  );
};

export default EmailInput;
