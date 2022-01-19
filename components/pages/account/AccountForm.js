import Form from '../../ui/form/Form';
import DisplayNameInput from './form/DisplayNameInput';

const AccountForm = props => {
  return (
    <Form id='account-form' onSubmit={props.onSubmit}>
      <DisplayNameInput error={props.error} setError={props.setError} />
    </Form>
  );
};

export default AccountForm;
