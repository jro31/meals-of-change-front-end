import { Fragment } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import Overlay from '../../../ui/Overlay';

const MenuContainer = props => {
  return (
    <Fragment>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={props.in}
        timeout={400}
        classNames={props.transitionClassNames}
      >
        {props.children}
      </CSSTransition>
      <Overlay in={props.in} onClick={props.showHandler} />
    </Fragment>
  );
};

export default MenuContainer;
