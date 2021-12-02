import { useSelector } from 'react-redux';

import Container from './Container';

const LoginModal = props => {
  const loginModalIsOpen = useSelector(state => state.loginModal.loginModalIsOpen);

  const transitionClassNames = {
    // UPDATE THESE
    enter: '',
    enterActive: '',
    exit: '',
    exitActive: '',
  };

  return (
    <Container
      in={loginModalIsOpen}
      showHandler={props.showHandler}
      transitionClassNames={transitionClassNames}
    >
      <div className='flex fixed bg-white z-30 h-1/3 w-1/3 top-1/3 left-1/3'>
        <div>LOGIN MODAL</div>
      </div>
    </Container>
  );
};

export default LoginModal;
