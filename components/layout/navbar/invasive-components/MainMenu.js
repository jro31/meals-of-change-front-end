import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Container from './Container';
import { mainMenuActions } from '../../../../store/main-menu';
import { registrationModalActions } from '../../../../store/registration-modal';

const MainMenu = props => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.loginStatus.loggedInStatus === 'LOGGED_IN');
  const mainMenuIsOpen = useSelector(state => state.mainMenu.mainMenuIsOpen);

  const transitionClassNames = {
    enter: '',
    enterActive: 'animate-slide-in-right md:animate-slide-in-down',
    exit: '',
    exitActive: 'animate-slide-out-left md:animate-slide-out-up',
  };

  const navigateTo = path => {
    router.push(path);
    dispatch(mainMenuActions.closeMenu());
  };

  const addRecipeClickHandler = () => {
    if (isLoggedIn) {
      navigateTo('/recipes/new');
    } else {
      dispatch(mainMenuActions.closeMenu());
      dispatch(registrationModalActions.setModalTitle('You must login to add a recipe'));
      dispatch(registrationModalActions.setLoginRedirectPath('/recipes/new'));
      dispatch(registrationModalActions.openModal());
    }
  };

  return (
    <Container
      in={mainMenuIsOpen}
      showHandler={props.showHandler}
      transitionClassNames={transitionClassNames}
    >
      <div className='flex fixed top-14 left-0 bg-white z-30 p-10 h-screen-minus-nav md:h-auto md:min-h-33 min-w-75 md:w-full'>
        <div className='flex-initial pr-16'>
          <div onClick={() => navigateTo('/')} className='font-bold cursor-pointer'>
            Home
          </div>
        </div>
        <div className='flex flex-col flex-grow-only px-16'>
          <div
            onClick={() => navigateTo('/recipes')}
            className='flex-initial pb-2 font-bold cursor-pointer'
          >
            Recipes
          </div>
          <div className='flex-grow-only columns-2xs pt-2'>
            <div>Tag</div>
            <div>Tag</div>
            <div>Tag</div>
            <div>Tag</div>
            <div>Tag</div>
            <div>Tag</div>
            <div>Tag</div>
            <div>Tag</div>
            <div>Tag</div>
            <div>Tag</div>
            <div>Tag</div>
            <div>Tag</div>
            <div>Tag</div>
            <div>Tag</div>
            <div>Tag</div>
            <div>Tag</div>
            <div>Tag</div>
            <div>Tag</div>
            <div>Tag</div>
          </div>
        </div>
        <div className='flex-initial pr-16'>
          <div onClick={addRecipeClickHandler} className='font-bold cursor-pointer'>
            Add a recipe
          </div>
        </div>
        {/* If the user's not logged-in, this should instead open the login modal */}
      </div>
    </Container>
  );
};

export default MainMenu;
