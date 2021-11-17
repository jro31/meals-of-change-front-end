import { useSelector } from 'react-redux';

import Flexbox from '../../../styles/Flexbox';
import classes from './MainMenu.module.css';
import MenuContainer from './MenuContainer';

const MainMenu = props => {
  const mainMenuIsOpen = useSelector(state => state.mainMenu.mainMenuIsOpen);

  const transitionClassNames = {
    enter: '',
    enterActive: classes['menu-open'],
    exit: '',
    exitActive: classes['menu-close'],
  };

  return (
    <MenuContainer
      in={mainMenuIsOpen}
      showHandler={props.showHandler}
      transitionClassNames={transitionClassNames}
    >
      <Flexbox className={classes['main-menu']}>
        <div>Recipes</div>
      </Flexbox>
    </MenuContainer>
  );
};

export default MainMenu;
