import CSSTransition from 'react-transition-group/CSSTransition';

import Flexbox from '../styles/Flexbox';
import classes from './MainMenu.module.css';

const MainMenu = props => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.isOpen}
      timeout={400}
      classNames={{
        enter: '',
        enterActive: classes['menu-open'],
        exit: '',
        exitActive: classes['menu-close'],
      }}
    >
      <Flexbox className={classes['main-menu']}>
        <div>Recipes</div>
      </Flexbox>
    </CSSTransition>
  );
};

export default MainMenu;
