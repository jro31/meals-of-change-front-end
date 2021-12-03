import Form from '../../../../../ui/form/form';
import FormSection from '../../../../../ui/form/FormSection';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

const LoginForm = () => {
  return (
    <Form>
      <FormSection>
        <EmailInput />
        <PasswordInput />
      </FormSection>
    </Form>
  );
};

export default LoginForm;
