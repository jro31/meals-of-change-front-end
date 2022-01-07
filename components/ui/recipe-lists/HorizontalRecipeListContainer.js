import { Fragment, useRef, useState } from 'react';

import Pointer from '../Pointer';
import Title from '../text/Title';

const HorizontalRecipeListContainer = props => {
  const listContainerRef = useRef();
  const [isHovering, setIsHovering] = useState(false);

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
    <Fragment>
      <div className='h-full relative flex flex-col'>
        <div className='pl-1/12 my-6 flex-initial'>
          <Title>{props.title || 'Recipes'}</Title>
        </div>
        <div
          onMouseEnter={onHover}
          onMouseLeave={onLeaveHover}
          className='relative flex max-h-full-minus-88px sm:max-h-full-minus-96px'
        >
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
            className={`flex flex-col flex-wrap justify-center overflow-x-scroll snap-mandatory snap-x scroll-smooth pl-1/12 basis-full grow-0`}
            ref={listContainerRef}
          >
            {props.children}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HorizontalRecipeListContainer;
