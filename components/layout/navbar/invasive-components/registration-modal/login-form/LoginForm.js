import Form from '../../../../../ui/form/form';
import FormSection from '../../../../../ui/form/FormSection';
import EmailInput from './EmailInput';

const LoginForm = () => {
  return (
    <Form>
      <FormSection>
        <EmailInput />
      </FormSection>
    </Form>
  );
};

export default LoginForm;
