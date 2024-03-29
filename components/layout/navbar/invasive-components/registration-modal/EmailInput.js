import Input from '../../../../ui/form/Input';
import useInput from '../../../../../hooks/use-input';

const EmailInput = props => {
  const emailInputValidation = value => {
    // prettier-ignore
    return /^\S+@\S+\.\S+$/.test(value.trim())
  };

  const { valueChangeHandler, inputBlurHandler } = useInput(
    props.setEnteredEmailAction,
    emailInputValidation,
    props.setEnteredEmailIsValidAction,
    props.setEmailInputIsTouchedAction,
    'email'
  );

  const inputChangeHandler = event => {
    if (props.formError) {
      props.setFormError(null);
    }
    valueChangeHandler(event);
  };

  return (
    <Input
      type='email'
      required
      id='email'
      value={props.enteredEmail}
      onChange={inputChangeHandler}
      onBlur={inputBlurHandler}
      showError={props.inputIsTouched && !props.enteredEmailIsValid}
      errorMessage='Enter a valid email address'
      label='Email address'
    />
  );
};

export default EmailInput;
