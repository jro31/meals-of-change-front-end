import { Fragment, useRef } from 'react';

import RecipeCard from './RecipeCard';
import Flexbox from '../styles/Flexbox';
import Pointer from './Pointer';
import classes from './HorizontalRecipeList.module.css';

const pointerSize = 21;

const HorizontalRecipeList = props => {
  const listContainerRef = useRef();
  const firstCardContainerRef = useRef();
  const firstCardRef = useRef();

  const scrollLeftHandler = () => {
    listContainerRef.current.scrollLeft =
      listContainerRef.current.scrollLeft - firstCardContainerRef.current.offsetWidth;
  };

  const scrollRightHandler = () => {
    listContainerRef.current.scrollLeft =
      listContainerRef.current.scrollLeft + firstCardContainerRef.current.offsetWidth;
  };

  const pointerTop = () => {
    if (firstCardRef.current) {
      // prettier-ignore
      return (firstCardRef.current.offsetHeight / 2) - (pointerSize / 2) - (9 / 2);
    }

    return 150;
  };

  return (
    <Fragment>
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
          {props.recipes.map(recipe => {
            return (
              <div
                key={recipe.id}
                className={classes['card-container']}
                ref={recipe === props.recipes[0] ? firstCardContainerRef : null}
              >
                <RecipeCard
                  recipe={recipe}
                  refName={recipe === props.recipes[0] ? firstCardRef : null}
                />
              </div>
            );
          })}
        </Flexbox>
      </div>
    </Fragment>
  );
};

export default HorizontalRecipeList;
