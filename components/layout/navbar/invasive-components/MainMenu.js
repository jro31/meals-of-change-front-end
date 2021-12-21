import { useSelector } from 'react-redux';

import Container from './Container';

const MainMenu = props => {
  const mainMenuIsOpen = useSelector(state => state.mainMenu.mainMenuIsOpen);

  const transitionClassNames = {
    enter: '',
    enterActive: 'animate-slide-in-right md:animate-slide-in-down',
    exit: '',
    exitActive: 'animate-slide-out-left md:animate-slide-out-up',
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
            {tags.map(tag => {
              return (
                <div
                  key={tag}
                  onClick={() => navigateTo(`/recipes?tag_name=${tag.toLowerCase()}`)}
                  className='cursor-pointer'
                >
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
        <div className='flex-initial pr-16'>
          <div onClick={addRecipeClickHandler} className='font-bold cursor-pointer'>
            Add a recipe
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainMenu;
