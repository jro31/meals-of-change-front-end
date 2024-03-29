import Input from '../../../../ui/form/Input';
import useInput from '../../../../../hooks/use-input';
import { useDispatch } from 'react-redux';

const PasswordInput = props => {
  const dispatch = useDispatch();

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
    if (!props.confirmationInput && !props.loginForm) {
      dispatch(
        props.setConfirmationInputIsValidAction(
          event.target.value === props.enteredConfirmationInput
        )
      );
    }
    valueChangeHandler(event);
  };

  return (
    <Input
      type='password'
      required
      id={props.confirmationInput ? 'password-confirmation' : 'password'}
      value={props.enteredPassword}
      onChange={inputChangeHandler}
      onBlur={inputBlurHandler}
      showError={props.inputIsTouched && !props.enteredPasswordIsValid}
      errorMessage={errorMessage()}
      label={props.confirmationInput ? 'Confirm password' : 'Password'}
    />
  );
};

export default PasswordInput;
