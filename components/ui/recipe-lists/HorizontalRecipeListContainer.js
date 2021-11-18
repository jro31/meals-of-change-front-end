import { useRef } from 'react';

import Flexbox from '../../styles/Flexbox';
import Pointer from '../Pointer';
import classes from './HorizontalRecipeListContainer.module.css';

const pointerSize = 21;

const HorizontalRecipeListContainer = props => {
  const listContainerRef = useRef();

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
    return (props.listHeight / 2) - (pointerSize / 2) - (9 / 2);
  };

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
      <Flexbox className={classes['horizontal-recipe-list']} refName={listContainerRef}>
        {props.children}
      </Flexbox>
    </div>
  );
};

export default HorizontalRecipeListContainer;
