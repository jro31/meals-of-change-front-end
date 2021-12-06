import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../Container';
import LoginForm from './login-form/LoginForm';
import SignUpForm from './sign-up-form/SignUpForm';
import { registrationModalActions } from '../../../../../store/registration-modal';

const RegistrationModal = props => {
  const dispatch = useDispatch();
  const registrationModalIsOpen = useSelector(
    state => state.registrationModal.registrationModalIsOpen
  );
  const activeForm = useSelector(state => state.registrationModal.activeForm);

  const showLoginFormHandler = () => {
    dispatch(registrationModalActions.showLoginForm());
  };

  const showSignUpFormHandler = () => {
    dispatch(registrationModalActions.showSignUpForm());
  };

  const transitionClassNames = {
    enter: '',
    enterActive: 'animate-fade-in',
    exit: '',
    exitActive: 'animate-fade-out',
  };

  return (
    <Container
      in={registrationModalIsOpen}
      showHandler={props.showHandler}
      transitionClassNames={transitionClassNames}
    >
      <div className='flex fixed bg-white z-30 h-1/3 w-1/3 top-1/3 left-1/3'>
        {activeForm === 'login' && (
          <Fragment>
            <LoginForm />
            <button onClick={showSignUpFormHandler}>Sign up</button>
          </Fragment>
        )}
        {activeForm === 'sign-up' && (
          <Fragment>
            <SignUpForm />
            <button onClick={showLoginFormHandler}>Login</button>
          </Fragment>
        )}
      </div>
    </Container>
  );
};

export default RegistrationModal;
