import { useDispatch, useSelector } from 'react-redux';

import { loginStatusActions } from '../../../../store/login-status';
import { profileMenuActions } from '../../../../store/profile-menu';
import Container from './Container';

const ProfileMenu = props => {
  const dispatch = useDispatch();
  const profileMenuIsOpen = useSelector(state => state.profileMenu.profileMenuIsOpen);

  const logoutHandler = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/logout`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();

      if (data.logged_out) {
        dispatch(loginStatusActions.logout());
        dispatch(profileMenuActions.closeMenu());
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      // HANDLE THIS ERROR
    }
  };

  const transitionClassNames = {
    enter: '',
    enterActive: 'animate-slide-in-left',
    exit: '',
    exitActive: 'animate-slide-out-right',
  };

  return (
    <Container
      in={profileMenuIsOpen}
      showHandler={props.showHandler}
      transitionClassNames={transitionClassNames}
    >
      <div className='flex fixed top-14 right-0 bg-white z-30 p-10 h-screen-minus-nav min-w-33'>
        <div onClick={logoutHandler}>Logout</div>
      </div>
    </Container>
  );
};

export default ProfileMenu;
