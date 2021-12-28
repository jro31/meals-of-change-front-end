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
      <div
        className={`flex flex-col fixed inset-x-1/24 sm:inset-x-1/12 md:inset-x-1/6 lg:inset-x-1/4 xl:inset-x-1/3 ${
          activeForm === 'sign-up' ? 'top-1/6' : 'top-1/4'
        } h-fit w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white z-30 rounded-2xl p-4 overflow-scroll`}
      >
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
    </Container>
  );
};

export default RegistrationModal;
