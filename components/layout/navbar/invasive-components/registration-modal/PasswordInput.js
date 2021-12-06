import FormLine from '../../../../ui/form/FormLine';
import Input from '../../../../ui/form/Input';
import InputContainer from '../../../../ui/form/InputContainer';
import useInput from '../../../../../hooks/use-input';

const PasswordInput = props => {
  const passwordInputValidation = value => {
    if (props.confirmationInput) {
      return value.trim() === props.initialPasswordInputValue.trim();
    } else {
      return value.trim().length >= 8;
    }
  };

  const errorMessage = () => {
    if (props.confirmationInput) {
      return "Passwords don't match";
    } else if (!props.loginForm) {
      return 'Password must be at least 8 characters';
    }
  };

  const { valueChangeHandler, inputBlurHandler } = useInput(
    props.setEnteredPasswordAction,
    passwordInputValidation,
    props.setEnteredPasswordIsValidAction,
    props.setPasswordInputIsTouchedAction,
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
          id={props.confirmationInput ? 'password-confirmation' : 'password'}
          value={props.enteredPassword}
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
          label={props.confirmationInput ? 'Confirm password' : 'Password'}
          showError={props.inputIsTouched && !props.enteredPasswordIsValid}
          errorMessage={errorMessage()}
        />
      </InputContainer>
    </FormLine>
  );
};

export default PasswordInput;
