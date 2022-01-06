import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { loginStatusActions } from '../../../../store/login-status';
import { profileMenuActions } from '../../../../store/profile-menu';
import Container from './Container';

const ProfileMenu = props => {
  const router = useRouter();
  const dispatch = useDispatch();
  const profileMenuIsOpen = useSelector(state => state.profileMenu.profileMenuIsOpen);
  const user = useSelector(state => state.loginStatus.user);

  const navigateTo = path => {
    router.push(path);
    dispatch(profileMenuActions.closeMenu());
  };

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
        // TODO - If on a protected page (for example, the recipes new page or the account page (when it exists), should also redirect to the homepage
        // (Could also do that for all logouts if only doing it for specific pages is a pain)
        dispatch(loginStatusActions.logout());
        dispatch(profileMenuActions.closeMenu());
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      // TODO - Handle this error
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
      <div className='flex flex-col justify-between fixed top-14 right-0 bg-slate-800 z-30 p-10 h-screen-minus-nav w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4'>
        <div className='flex flex-col gap-6'>
          {/* TODO - <div>Account</div> */}
          {user && user.id && (
            <div
              className='cursor-pointer'
              onClick={() => navigateTo(`/recipes?user_id=${user.id}`)}
            >
              My recipes
            </div>
          )}
          {/* TODO - <div>Bookmarked recipes</div> */}
        </div>
        <div>
          <div className='cursor-pointer' onClick={logoutHandler}>
            Logout
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProfileMenu;
