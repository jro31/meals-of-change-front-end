import { useSelector } from 'react-redux';

import useInput from '../../../../../../hooks/use-input';
import FormLine from '../../../../../ui/form/FormLine';
import Input from '../../../../../ui/form/Input';
import InputContainer from '../../../../../ui/form/InputContainer';
import { loginFormActions } from '../../../../../../store/login-form';

const PasswordInput = props => {
  const enteredPassword = useSelector(state => state.loginForm.enteredPassword);
  const enteredPasswordIsValid = useSelector(state => state.loginForm.enteredPasswordIsValid);
  const inputIsTouched = useSelector(state => state.loginForm.passwordInputIsTouched);

  const passwordInputValidation = value => value.trim().length > 0;

  const { valueChangeHandler, inputBlurHandler } = useInput(
    loginFormActions.setEnteredPassword,
    passwordInputValidation,
    loginFormActions.setEnteredPasswordIsValid,
    loginFormActions.setPasswordInputIsTouched,
    'password'
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
          type='password'
          required
          id='password'
          value={enteredPassword}
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
          label='Password'
          showError={inputIsTouched && !enteredPasswordIsValid}
          errorMessage='Enter a password'
        />
      </InputContainer>
    </FormLine>
  );
};

export default PasswordInput;
