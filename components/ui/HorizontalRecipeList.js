import { Fragment, useRef } from 'react';

import RecipeCard from './RecipeCard';
import Flexbox from '../styles/Flexbox';
import classes from './HorizontalRecipeList.module.css';

const HorizontalRecipeList = props => {
  const listContainerRef = useRef();
  const firstCardContainerRef = useRef();

  const scrollRightHandler = () => {
    listContainerRef.current.scrollLeft =
      listContainerRef.current.scrollLeft + firstCardContainerRef.current.offsetWidth;
  };

  const scrollLeftHandler = () => {
    listContainerRef.current.scrollLeft =
      listContainerRef.current.scrollLeft - firstCardContainerRef.current.offsetWidth;
  };

  return (
    <Fragment>
      <button onClick={scrollLeftHandler}>Scroll left</button>
      <button onClick={scrollRightHandler}>Scroll right</button>
      <Flexbox className={classes['horizontal-recipe-list']} refName={listContainerRef}>
        {props.recipes.map(recipe => {
          return (
            <div
              key={recipe.id}
              className={classes['card-container']}
              ref={recipe === props.recipes[0] ? firstCardContainerRef : null}
            >
              <RecipeCard recipe={recipe} />
            </div>
          );
        })}
      </Flexbox>
    </Fragment>
  );
};

export default HorizontalRecipeList;
