import Pointer from '../Pointer';
import classes from './HorizontalRecipeListContainer.module.css';

const pointerSize = 21;

const HorizontalRecipeListContainer = props => {
  const pointerTop = () => {
    // prettier-ignore
    return props.listHeight / 2 - pointerSize / 2 - 9 / 2;
  };

  return (
    <div className={classes.container}>
      <Pointer
        onClick={props.leftPointerClickHandler}
        direction='left'
        size={pointerSize}
        className={classes['left-pointer']}
        style={{ top: `${pointerTop()}px` }}
      />
      <Pointer
        onClick={props.rightPointerClickHandler}
        direction='right'
        size={pointerSize}
        className={classes['right-pointer']}
        style={{ top: `${pointerTop()}px` }}
      />
      {props.children}
    </div>
  );
};

export default HorizontalRecipeListContainer;
