import { useSelector } from 'react-redux';

import Input from '../../../ui/form/Input';
import { accountFormActions } from '../../../../store/account-form';
import useInput from '../../../../hooks/use-input';

const InstagramUsernameInput = props => {
  const enteredValue = useSelector(state => state.accountForm.enteredInstagramUsername);
  const enteredValueIsValid = useSelector(
    state => state.accountForm.enteredInstagramUsernameIsValid
  );
  const inputIsTouched = useSelector(state => state.accountForm.instagramUsernameInputIsTouched);

  const validLength = value => value === '' || value.length <= 30;
  const validCharacters = value => /^[\w.]*$/.test(value);
  const instagramUsernameInputValidation = value =>
    validLength(props.parsedInput(value)) && validCharacters(props.parsedInput(value));

  const { valueChangeHandler, inputBlurHandler } = useInput(
    accountFormActions.setEnteredInstagramUsername,
    instagramUsernameInputValidation,
    accountFormActions.setEnteredInstagramUsernameIsValid,
    accountFormActions.setInstagramUsernameInputIsTouched
  );

  const inputChangeHandler = event => {
    props.masterInputChangeHandler(event, valueChangeHandler);
  };

  const errorMessage = () => {
    if (!validLength(props.parsedInput(enteredValue))) return 'Must be less than 30 characters';
    if (!validCharacters(props.parsedInput(enteredValue)))
      return 'Must contain only letters, numbers, full-stops and underscores';
    return 'Must be less than 30 characters and only letters, numbers, full-stops and underscores';
  };

  return (
    <Input
      id='instagram-username'
      value={enteredValue}
      onChange={inputChangeHandler}
      onBlur={inputBlurHandler}
      showError={inputIsTouched && !enteredValueIsValid}
      errorMessage={errorMessage()}
      label='Instagram username'
    />
  );
};

export default InstagramUsernameInput;
