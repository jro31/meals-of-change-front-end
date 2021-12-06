import FormLine from '../../../../ui/form/FormLine';
import Input from '../../../../ui/form/Input';
import InputContainer from '../../../../ui/form/InputContainer';
import useInput from '../../../../../hooks/use-input';

const EmailInput = props => {
  const emailInputValidation = value => {
    // COMPLETE THIS
    return value.trim().length > 0;
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
    <FormLine>
      <InputContainer>
        <Input
          type='email'
          required
          id='email'
          value={props.enteredEmail}
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
          label='Email'
          showError={props.inputIsTouched && !props.enteredEmailIsValid}
          errorMessage='Entered a valid email address'
        />
      </InputContainer>
    </FormLine>
  );
};

export default EmailInput;
