import FormLine from '../../../../ui/form/FormLine';
import Input from '../../../../ui/form/Input';
import InputContainer from '../../../../ui/form/InputContainer';
import useInput from '../../../../../hooks/use-input';

const PasswordInput = props => {
  const passwordInputValidation = value => value.trim().length > 0;

  const { valueChangeHandler, inputBlurHandler } = useInput(
    props.setEnteredPasswordAction,
    passwordInputValidation,
    props.setEnteredPasswordIsValidAction,
    props.setPasswordInputIsTouched,
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
          value={props.enteredPassword}
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
          label='Password'
          showError={props.inputIsTouched && !props.enteredPasswordIsValid}
          errorMessage='Password must be at least 8 characters'
        />
      </InputContainer>
    </FormLine>
  );
};

export default PasswordInput;
