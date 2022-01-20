import { useSelector } from 'react-redux';

import useInput from '../../../../hooks/use-input';
import Input from '../../../ui/form/Input';
import { accountFormActions } from '../../../../store/account-form';

const TwitterHandleInput = props => {
  const enteredValue = useSelector(state => state.accountForm.enteredTwitterHandle);
  const enteredValueIsValid = useSelector(state => state.accountForm.enteredTwitterHandleIsValid);
  const inputIsTouched = useSelector(state => state.accountForm.twitterHandleInputIsTouched);

  const validLength = value => value === '' || (value.length >= 4 && value.length <= 15);
  const validCharacters = value => /^\w*$/.test(value);
  const twitterHandleInputValidation = value =>
    validLength(props.parsedInput(value)) && validCharacters(props.parsedInput(value));

  const { valueChangeHandler, inputBlurHandler } = useInput(
    accountFormActions.setEnteredTwitterHandle,
    twitterHandleInputValidation,
    accountFormActions.setEnteredTwitterHandleIsValid,
    accountFormActions.setTwitterHandleInputIsTouched
  );

  const inputChangeHandler = event => {
    props.masterInputChangeHandler(event, valueChangeHandler);
  };

  const errorMessage = () => {
    if (!validLength(props.parsedInput(enteredValue))) return 'Must be between 4 and 15 characters';
    if (!validCharacters(props.parsedInput(enteredValue)))
      return 'Must contain only letters, numbers and underscores';
    return 'Must be between 4 and 15 characters, and only letters, numbers and underscores';
  };

  return (
    <Input
      id='twitter-handle'
      value={enteredValue}
      onChange={inputChangeHandler}
      onBlur={inputBlurHandler}
      showError={inputIsTouched && !enteredValueIsValid}
      errorMessage={errorMessage()}
      label='Twitter handle'
    />
  );
};

export default TwitterHandleInput;
