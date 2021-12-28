import { useRef, useState } from 'react';

import Pointer from '../Pointer';

const HorizontalRecipeListContainer = props => {
  const listContainerRef = useRef();
  const [isHovering, setIsHovering] = useState(false);

  const tiersClass = () => {
    switch (props.tiers) {
      case 1:
        return 'min-h-300px';
      case 2:
        return 'min-h-600px';
      case 3:
        return 'min-h-900px';
      default:
        return 'min-h-300px';
    }
  };

  // TODO - These should scroll through all displaying recipes, not just one recipe at a time
  const scrollLeftHandler = () => {
    listContainerRef.current.scrollLeft =
      listContainerRef.current.scrollLeft - props.cardContainerWidth;
  };

  const scrollRightHandler = () => {
    listContainerRef.current.scrollLeft =
      listContainerRef.current.scrollLeft + props.cardContainerWidth;
  };

  const onHover = () => {
    setIsHovering(true);
  };

  const onLeaveHover = () => {
    setIsHovering(false);
  };

  return (
    <div onMouseEnter={onHover} onMouseLeave={onLeaveHover} className='relative'>
      <Pointer
        onClick={scrollLeftHandler}
        direction='left'
        className={`left-0 ${isHovering ? 'block' : 'hidden'}`}
      />
      <Pointer
        onClick={scrollRightHandler}
        direction='right'
        className={`right-0 ${isHovering ? 'block' : 'hidden'}`}
      />
      <div
        className={`flex flex-col flex-wrap overflow-x-scroll snap-mandatory snap-x scroll-smooth ${tiersClass()}`}
        ref={listContainerRef}
        style={{ height: props.containerHeight || '50vh' }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default HorizontalRecipeListContainer;
