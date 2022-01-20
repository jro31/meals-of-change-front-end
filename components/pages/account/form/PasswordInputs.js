import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import NewPasswordInput from './NewPasswordInput';
import { accountFormActions } from '../../../../store/account-form';

const PasswordInputs = props => {
  const enteredNewPassword = useSelector(state => state.accountForm.enteredNewPassword);
  const enteredNewPasswordIsValid = useSelector(
    state => state.accountForm.enteredNewPasswordIsValid
  );
  const newPasswordInputIsTouched = useSelector(
    state => state.accountForm.newPasswordInputIsTouched
  );
  const enteredNewPasswordConfirmation = useSelector(
    state => state.accountForm.enteredNewPasswordConfirmation
  );
  const enteredNewPasswordConfirmationIsValid = useSelector(
    state => state.accountForm.enteredNewPasswordConfirmationIsValid
  );
  const newPasswordConfirmationInputIsTouched = useSelector(
    state => state.accountForm.newPasswordConfirmationInputIsTouched
  );

  return (
    <Fragment>
      <NewPasswordInput
        enteredNewPassword={enteredNewPassword}
        setEnteredNewPasswordAction={accountFormActions.setEnteredNewPassword}
        setEnteredNewPasswordIsValidAction={accountFormActions.setEnteredNewPasswordIsValid}
        setNewPasswordInputIsTouchedAction={accountFormActions.setNewPasswordInputIsTouched}
        enteredNewPasswordIsValid={enteredNewPasswordIsValid}
        inputIsTouched={newPasswordInputIsTouched}
        masterInputChangeHandler={props.masterInputChangeHandler}
        enteredConfirmationInput={enteredNewPasswordConfirmation}
        setConfirmationInputIsValidAction={
          accountFormActions.setEnteredNewPasswordConfirmationIsValid
        }
      />
      <NewPasswordInput
        confirmationInput={true}
        enteredNewPassword={enteredNewPasswordConfirmation}
        setEnteredNewPasswordAction={accountFormActions.setEnteredNewPasswordConfirmation}
        setEnteredNewPasswordIsValidAction={
          accountFormActions.setEnteredNewPasswordConfirmationIsValid
        }
        setNewPasswordInputIsTouchedAction={
          accountFormActions.setNewPasswordConfirmationInputIsTouched
        }
        enteredNewPasswordIsValid={enteredNewPasswordConfirmationIsValid}
        inputIsTouched={newPasswordConfirmationInputIsTouched}
        masterInputChangeHandler={props.masterInputChangeHandler}
        initialNewPasswordInputValue={enteredNewPassword}
      />
    </Fragment>
  );
};

export default PasswordInputs;
