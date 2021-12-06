import { useState } from 'react';

import Form from '../../../../../ui/form/form';
import FormSection from '../../../../../ui/form/FormSection';
import EmailInput from './EmailInput';

const SignUpForm = () => {
  const [error, setError] = useState(null);

  return (
    <Form>
      <FormSection>
        <EmailInput formError={error} setFormError={setError} />
      </FormSection>
    </Form>
  );
};

export default SignUpForm;
