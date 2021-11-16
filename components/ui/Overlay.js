import { useSelector } from 'react-redux';
import CSSTransition from 'react-transition-group/CSSTransition';

import classes from './Overlay.module.css';

const Overlay = props => {
  const mainMenuIsOpen = useSelector(state => state.mainMenu.mainMenuIsOpen);

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={mainMenuIsOpen}
      timeout={400}
      classNames={{
        enter: '',
        enterActive: classes['show-overlay'],
        exit: '',
        exitActive: classes['hide-overlay'],
      }}
    >
      <div onClick={props.onClick || null}>
        <div className={classes['navbar-overlay']}></div>
        <div className={classes['main-overlay']}></div>
      </div>
    </CSSTransition>
  );
};

export default Overlay;
