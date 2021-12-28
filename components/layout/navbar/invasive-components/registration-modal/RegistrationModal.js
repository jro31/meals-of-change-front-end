import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../Container';
import LoginForm from './login-form/LoginForm';
import SignUpForm from './sign-up-form/SignUpForm';
import Subheading from '../../../../ui/text/Subheading';

import { loginFormActions } from '../../../../../store/login-form';
import { registrationModalActions } from '../../../../../store/registration-modal';
import { signUpFormActions } from '../../../../../store/sign-up-form';

const RegistrationModal = props => {
  const dispatch = useDispatch();
  const registrationModalIsOpen = useSelector(
    state => state.registrationModal.registrationModalIsOpen
  );
  const activeForm = useSelector(state => state.registrationModal.activeForm);
  const modalTitle = useSelector(state => state.registrationModal.modalTitle);

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
      <div className='flex flex-col justify-center fixed z-30 h-full w-screen'>
        <div className='flex h-fit justify-center'>
          <div className='basis-11/12 grow-0 shrink-0 bg-white px-4 py-4 rounded-2xl'>
            {modalTitle && <Subheading className='flex-initial'>{modalTitle}</Subheading>}
            <div className='flex flex-col'>
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
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RegistrationModal;
