import { useRef, useState, useEffect } from 'react';

import RecipeCard from '../RecipeCard';
import Flexbox from '../../styles/Flexbox';
import classes from './HorizontalRecipeList.module.css';
import HorizontalRecipeListContainer from './HorizontalRecipeListContainer';

const HorizontalRecipeList = props => {
  const listContainerRef = useRef();
  const firstCardContainerRef = useRef();
  const firstCardRef = useRef();
  const [listHeight, setListHeight] = useState(350);

  const scrollLeftHandler = () => {
    listContainerRef.current.scrollLeft =
      listContainerRef.current.scrollLeft - firstCardContainerRef.current.offsetWidth;
  };

  const scrollRightHandler = () => {
    listContainerRef.current.scrollLeft =
      listContainerRef.current.scrollLeft + firstCardContainerRef.current.offsetWidth;
  };

  useEffect(() => {
    setListHeight(firstCardRef.current.offsetHeight);
  }, []);

  return (
    <HorizontalRecipeListContainer
      leftPointerClickHandler={scrollLeftHandler}
      rightPointerClickHandler={scrollRightHandler}
      listHeight={listHeight}
    >
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
    </HorizontalRecipeListContainer>
  );
};

export default HorizontalRecipeList;
