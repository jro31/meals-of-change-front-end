import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../Container';
import LoginForm from './login-form/LoginForm';
import SignUpForm from './sign-up-form/SignUpForm';

import { loginFormActions } from '../../../../../store/login-form';
import { registrationModalActions } from '../../../../../store/registration-modal';
import { signUpFormActions } from '../../../../../store/sign-up-form';

const RegistrationModal = props => {
  const dispatch = useDispatch();
  const registrationModalIsOpen = useSelector(
    state => state.registrationModal.registrationModalIsOpen
  );
  const activeForm = useSelector(state => state.registrationModal.activeForm);

  const showLoginFormHandler = () => {
    dispatch(registrationModalActions.showLoginForm());
    dispatch(signUpFormActions.resetForm());
  };

  const showSignUpFormHandler = () => {
    dispatch(registrationModalActions.showSignUpForm());
    dispatch(loginFormActions.resetForm());
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
