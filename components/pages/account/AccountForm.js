import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from '../../ui/form/Form';
import DisplayNameInput from './form/DisplayNameInput';
import { accountFormActions } from '../../../store/account-form';

const AccountForm = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.loginStatus.user);

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      dispatch(accountFormActions.setEnteredDisplayName(user.display_name));
    }
  }, [dispatch, user]);

  return (
    <Form id='account-form' onSubmit={props.onSubmit}>
      <DisplayNameInput error={props.error} setError={props.setError} />
    </Form>
  );
};

export default AccountForm;
