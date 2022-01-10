import { useState } from 'react';
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
  const [error, setError] = useState('');

  const navigateTo = path => {
    router.push(path);
    dispatch(profileMenuActions.closeMenu());
  };

  const logoutHandler = async () => {
    // TODO - Add a warning that unsaved changes will be lost if they get here on the recipes/new page
    setError('');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/logout`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Unable to logout');
      }

      const data = await response.json();

      if (data.logged_out) {
        dispatch(loginStatusActions.logout());
        dispatch(profileMenuActions.closeMenu());
        router.replace(`/`);
      } else {
        throw new Error('Unable to logout');
      }
    } catch (error) {
      setError(error);
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
      <div
        className={`flex flex-col justify-between fixed top-14 right-0 bg-slate-800 z-30 px-10 pt-10 ${
          error ? 'pb-0' : 'pb-10'
        } h-screen-minus-nav w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4`}
      >
        <div className='flex flex-col gap-6'>
          {/* TODO - <div>Account</div> */}
          {user && user.id && (
            <div
              className='font-bold cursor-pointer'
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
          {error && <div className='text-rose-300 w-full mt-2 mb-2'>{error}</div>}
        </div>
      </div>
    </Container>
  );
};

export default ProfileMenu;
