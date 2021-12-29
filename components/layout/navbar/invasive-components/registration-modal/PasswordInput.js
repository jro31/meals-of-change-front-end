import FormLine from '../../../../ui/form/FormLine';
import Input from '../../../../ui/form/Input';
import InputContainer from '../../../../ui/form/InputContainer';
import useInput from '../../../../../hooks/use-input';

const PasswordInput = props => {
  const passwordInputValidation = value => {
    if (props.confirmationInput) {
      return value.trim() === props.initialPasswordInputValue.trim();
    } else if (props.loginForm) {
      return value.trim().length > 0;
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
    if (props.confirmationInput && !props.inputIsTouched) {
      inputBlurHandler();
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
          showError={props.inputIsTouched && !props.enteredPasswordIsValid}
          errorMessage={errorMessage()}
          placeholder={props.confirmationInput ? 'Confirm password' : 'Password'}
        />
      </InputContainer>
    </FormLine>
  );
};

export default PasswordInput;
