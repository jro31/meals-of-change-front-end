import { useDispatch } from 'react-redux';
import useInput from '../../../../hooks/use-input';
import Input from '../../../ui/form/Input';

const NewPasswordInput = props => {
  const dispatch = useDispatch();

  const newPasswordInputValidation = value => {
    if (props.confirmationInput) {
      return value.trim() === props.initialNewPasswordInputValue.trim();
    } else {
      return value.trim() === '' || value.trim().length >= 8;
    }
  };

  const errorMessage = () => {
    if (props.confirmationInput) {
      return "Passwords don't match";
    } else {
      return 'Password must be at least 8 characters';
    }
  };

  const { valueChangeHandler, inputBlurHandler } = useInput(
    props.setEnteredNewPasswordAction,
    newPasswordInputValidation,
    props.setEnteredNewPasswordIsValidAction,
    props.setNewPasswordInputIsTouchedAction,
    'password'
  );

  const inputChangeHandler = event => {
    if (props.error) {
      props.setError(null);
    }
    if (props.confirmationInput && !props.inputIsTouched) {
      inputBlurHandler();
    }
    if (!props.confirmationInput) {
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
      id={props.confirmationInput ? 'new-password-confirmation' : 'new-password'}
      value={props.enteredNewPassword}
      onChange={inputChangeHandler}
      onBlur={inputBlurHandler}
      showError={props.inputIsTouched && !props.enteredNewPasswordIsValid}
      errorMessage={errorMessage()}
      label={props.confirmationInput ? 'Confirm new password' : 'New password'}
    />
  );
};

export default NewPasswordInput;
