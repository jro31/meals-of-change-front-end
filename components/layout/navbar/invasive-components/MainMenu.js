import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import InvasiveComponentContainer from '../../../ui/InvasiveComponentContainer';
import { mainMenuActions } from '../../../../store/main-menu';
import { registrationModalActions } from '../../../../store/registration-modal';

const MainMenu = props => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.loginStatus.loggedInStatus === 'LOGGED_IN');
  const mainMenuIsOpen = useSelector(state => state.mainMenu.mainMenuIsOpen);
  const tags = useSelector(state => state.mainMenu.tags);

  const transitionClassNames = {
    enter: '',
    enterActive: 'animate-slide-in-right lg:animate-slide-in-down',
    exit: '',
    exitActive: 'animate-slide-out-left lg:animate-slide-out-up',
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

  const getInTouchClickHandler = () => {
    // TODO
  };

  return (
    <InvasiveComponentContainer
      in={mainMenuIsOpen}
      showHandler={props.showHandler}
      transitionClassNames={transitionClassNames}
    >
      <div className='flex flex-col lg:flex-row fixed top-14 left-0 bottom-0 lg:bottom-auto bg-slate-800 z-30 p-10 lg:min-h-33 lg:max-h-screen-minus-nav w-3/4 sm:w-1/2 lg:w-full max-w-full text-white'>
        <div className='flex-initial lg:pr-16'>
          <div onClick={() => navigateTo('/')} className='font-bold cursor-pointer'>
            Home
          </div>
        </div>
        <div className='flex flex-col grow shrink my-8 lg:my-0 lg:px-16 overflow-hidden'>
          <div
            onClick={() => navigateTo('/recipes')}
            className='flex-initial mb-4 font-bold cursor-pointer'
          >
            Recipes
          </div>
          <div className='flex-grow-only columns-2 xl:columns-3 2xl:columns-4'>
            {tags.map(tag => {
              return (
                <div
                  key={tag}
                  onClick={() => navigateTo(`/recipes?tag_name=${tag.toLowerCase()}`)}
                  className='cursor-pointer h-10 overflow-hidden leading-10'
                >
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
        <div className='flex flex-col gap-8 flex-initial lg:pr-16'>
          <div onClick={addRecipeClickHandler} className='font-bold cursor-pointer'>
            Get in touch
          </div>
          <div onClick={getInTouchClickHandler} className='font-bold cursor-pointer lg:order-first'>
            Add a recipe
          </div>
        </div>
        {/* TODO - Add a 'Social' (or 'Social media') link */}
        {/* This opens a modal which has links to the meals of change Twitter/Instagram/Facebook pages */}
      </div>
    </InvasiveComponentContainer>
  );
};

export default MainMenu;
