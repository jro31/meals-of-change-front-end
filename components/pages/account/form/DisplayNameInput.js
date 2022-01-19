import { useSelector } from 'react-redux';

import useInput from '../../../../hooks/use-input';
import Input from '../../../ui/form/Input';
import { accountFormActions } from '../../../../store/account-form';

const DisplayNameInput = props => {
  const enteredValue = useSelector(state => state.accountForm.enteredDisplayName);
  const enteredValueIsValid = useSelector(state => state.accountForm.enteredDisplayNameIsValid);
  const inputIsTouched = useSelector(state => state.accountForm.displayNameInputIsTouched);

  const displayNameInputValidation = value => value.trim().length >= 4 && value.trim().length <= 20;

  const { valueChangeHandler, inputBlurHandler } = useInput(
    accountFormActions.setEnteredDisplayName,
    displayNameInputValidation,
    accountFormActions.setEnteredDisplayNameIsValid,
    accountFormActions.setDisplayNameInputIsTouched
  );

  const inputChangeHandler = event => {
    if (props.error) {
      props.setError(null);
    }
    valueChangeHandler(event);
  };

  return (
    <Input
      // required
      id='display-name'
      value={enteredValue}
      onChange={inputChangeHandler}
      onBlur={inputBlurHandler}
      showError={inputIsTouched && !enteredValueIsValid}
      errorMessage='Must be between 4 and 20 characters'
      label='Display name'
    />
  );
};

export default DisplayNameInput;
