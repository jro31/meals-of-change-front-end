import { useSelector } from 'react-redux';

import Container from '../Container';
import LoginForm from './login-form/LoginForm';

const RegistrationModal = props => {
  const registrationModalIsOpen = useSelector(
    state => state.registrationModal.registrationModalIsOpen
  );

  const transitionClassNames = {
    // UPDATE THESE
    enter: '',
    enterActive: '',
    exit: '',
    exitActive: '',
  };

  return (
    <Container
      in={registrationModalIsOpen}
      showHandler={props.showHandler}
      transitionClassNames={transitionClassNames}
    >
      <div className='flex fixed bg-white z-30 h-1/3 w-1/3 top-1/3 left-1/3'>
        <LoginForm />
      </div>
    </Container>
  );
};

export default RegistrationModal;
