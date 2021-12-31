import { useSelector } from 'react-redux';

import useInput from '../../../../../../hooks/use-input';
import Input from '../../../../../ui/form/Input';
import InputContainer from '../../../../../ui/form/InputContainer';
import { signUpFormActions } from '../../../../../../store/sign-up-form';

const DisplayNameInput = props => {
  const enteredValue = useSelector(state => state.signUpForm.enteredDisplayName);
  const enteredValueIsValid = useSelector(state => state.signUpForm.enteredDisplayNameIsValid);
  const inputIsTouched = useSelector(state => state.signUpForm.displayNameInputIsTouched);

  const displayNameInputValidation = value => value.trim().length >= 4 && value.trim().length <= 20;

  const { valueChangeHandler, inputBlurHandler } = useInput(
    signUpFormActions.setEnteredDisplayName,
    displayNameInputValidation,
    signUpFormActions.setEnteredDisplayNameIsValid,
    signUpFormActions.setDisplayNameInputIsTouched
  );

  const inputChangeHandler = event => {
    if (props.formError) {
      props.setFormError(null);
    }
    valueChangeHandler(event);
  };

  return (
    <InputContainer>
      <Input
        required
        id='display-name'
        value={enteredValue}
        onChange={inputChangeHandler}
        onBlur={inputBlurHandler}
        showError={inputIsTouched && !enteredValueIsValid}
        errorMessage='Must be between 4 and 20 characters'
        placeholder='Display name'
      />
    </InputContainer>
  );
};

export default DisplayNameInput;
