import { useRef, useState, useEffect } from 'react';

import Flexbox from '../../styles/Flexbox';
import Pointer from '../Pointer';

const pointerSize = 21;

const HorizontalRecipeListContainer = props => {
  const listContainerRef = useRef();
  const [listHeight, setListHeight] = useState(450);

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

  const scrollLeftHandler = () => {
    listContainerRef.current.scrollLeft =
      listContainerRef.current.scrollLeft - props.cardContainerWidth;
  };

  const scrollRightHandler = () => {
    listContainerRef.current.scrollLeft =
      listContainerRef.current.scrollLeft + props.cardContainerWidth;
  };

  const pointerTop = () => {
    // prettier-ignore
    return (listHeight / 2) - (pointerSize / 2) - (8 / 2); // 8 == pointer padding
  };

  useEffect(() => {
    setListHeight(listContainerRef.current.offsetHeight);
  }, []);

  return (
    // This 'relative' is what causes the photos not to be covered by the overlay while it's transitioning its opacity
    // Removing it fixes the issue, but moves the pointers
    <div className='relative'>
      <Pointer
        onClick={scrollLeftHandler}
        direction='left'
        size={pointerSize}
        className='absolute left-2'
        style={{ top: `${pointerTop()}px` }}
      />
      <Pointer
        onClick={scrollRightHandler}
        direction='right'
        size={pointerSize}
        className='absolute right-2'
        style={{ top: `${pointerTop()}px` }}
      />
      <Flexbox
        column
        className={`flex-wrap overflow-x-scroll scroll-snap-x-mandatory scroll-smooth ${tiersClass()}`}
        refName={listContainerRef}
        style={{ height: props.containerHeight || '50vh' }}
      >
        {props.children}
      </Flexbox>
    </div>
  );
};

export default HorizontalRecipeListContainer;
