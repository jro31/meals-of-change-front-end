import classes from './TwoTierHorizontalRecipeList.module.css';

import Pointer from '../Pointer';

const pointerSize = 21;

const TwoTierHorizontalRecipeList = () => {
  const scrollLeftHandler = () => {
    return;
  };

  const scrollRightHandler = () => {
    return;
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
    </div>
  );
};

export default TwoTierHorizontalRecipeList;
