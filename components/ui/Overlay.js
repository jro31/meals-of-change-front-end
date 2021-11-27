import CSSTransition from 'react-transition-group/CSSTransition';

const Overlay = props => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.in}
      timeout={400}
      classNames={{
        enter: '',
        enterActive: 'animate-fade-in',
        exit: '',
        exitActive: 'animate-fade-out',
      }}
    >
      <div onClick={props.onClick || null}>
        <div className='fixed top-0 left-0 w-screen h-14 bg-transparent z-50'></div>
        <div className='fixed top-14 left-0 w-screen h-screen-minus-nav bg-gray-600 bg-opacity-70 z-20'></div>
      </div>
    </CSSTransition>
  );
};

export default Overlay;
