import { useSelector } from 'react-redux';

import Flexbox from '../../../styles/Flexbox';
import MenuContainer from './MenuContainer';

const MainMenu = props => {
  const mainMenuIsOpen = useSelector(state => state.mainMenu.mainMenuIsOpen);

  const transitionClassNames = {
    enter: '',
    enterActive: 'animate-slide-in-right md:animate-slide-in-down',
    exit: '',
    exitActive: 'animate-slide-out-left md:animate-slide-out-up',
  };

  return (
    <MenuContainer
      in={mainMenuIsOpen}
      showHandler={props.showHandler}
      transitionClassNames={transitionClassNames}
    >
      <Flexbox className='fixed top-14 left-0 bg-white z-30 p-10 h-screen-minus-nav md:h-auto md:min-h-33 min-w-75 md:w-full'>
        <div>Recipes</div>
      </Flexbox>
    </MenuContainer>
  );
};

export default MainMenu;
