import Input from '../../../ui/form/Input';

const EmailInput = props => {
  return <Input id='email' value={props.value} label='Email address' disabled={true} />;
};

export default EmailInput;
