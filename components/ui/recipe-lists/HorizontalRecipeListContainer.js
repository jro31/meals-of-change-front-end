import { useRef, useState, useEffect } from 'react';

import Flexbox from '../../styles/Flexbox';
import Pointer from '../Pointer';
import classes from './HorizontalRecipeListContainer.module.css';

const pointerSize = 21;

const HorizontalRecipeListContainer = props => {
  const listContainerRef = useRef();
  const [listHeight, setListHeight] = useState(450);

  const tiersClass = () => {
    switch (props.tiers) {
      case 1:
        return classes['one-tier'];
      case 2:
        return classes['two-tier'];
      case 3:
        return classes['three-tier'];
      default:
        return classes['one-tier'];
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
    return (listHeight / 2) - (pointerSize / 2) - (9 / 2); // 9 == pointer padding
  };

  useEffect(() => {
    setListHeight(listContainerRef.current.offsetHeight);
  }, []);

  return (
    <div className={classes.container}>
      <Pointer
        onClick={scrollLeftHandler}
        direction='left'
        size={pointerSize}
        className={classes['left-pointer']}
        style={{ top: `${pointerTop()}px` }}
      />
      <Pointer
        onClick={scrollRightHandler}
        direction='right'
        size={pointerSize}
        className={classes['right-pointer']}
        style={{ top: `${pointerTop()}px` }}
      />
      <Flexbox
        column
        className={`${classes['horizontal-recipe-list']} ${tiersClass()}`}
        refName={listContainerRef}
        style={{ height: props.containerHeight || '50vh' }}
      >
        {props.children}
      </Flexbox>
    </div>
  );
};

export default HorizontalRecipeListContainer;
