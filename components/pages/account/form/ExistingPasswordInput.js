import { useSelector } from 'react-redux';

import useInput from '../../../../hooks/use-input';
import { accountFormActions } from '../../../../store/account-form';
import Input from '../../../ui/form/Input';

const ExistingPasswordInput = props => {
  const enteredValue = useSelector(state => state.accountForm.enteredExistingPassword);

  const existingPasswordInputValidation = value => value.trim().length > 0;

  const { valueChangeHandler } = useInput(
    accountFormActions.setEnteredExistingPassword,
    existingPasswordInputValidation,
    accountFormActions.setEnteredExistingPasswordIsValid
  );

  const inputChangeHandler = event => {
    props.masterInputChangeHandler(event, valueChangeHandler);
  };

  return (
    <Input
      type='password'
      required
      id='existing-password'
      value={enteredValue}
      onChange={inputChangeHandler}
      label='Existing password'
      className='basis-full sm:basis-auto shrink'
      labelClassName={props.message ? 'hidden sm:block' : ''}
    />
  );
};

export default ExistingPasswordInput;
