import { useRef, useState, useEffect } from 'react';

import RecipeCard from '../RecipeCard';
import classes from './HorizontalRecipeList.module.css';
import HorizontalRecipeListContainer from './HorizontalRecipeListContainer';

const HorizontalRecipeList = props => {
  const firstCardContainerRef = useRef();
  const firstCardRef = useRef();
  const [listHeight, setListHeight] = useState(350);
  const [cardContainerWidth, setCardContainerWidth] = useState(450);

  useEffect(() => {
    setListHeight(firstCardRef.current.offsetHeight);
    setCardContainerWidth(firstCardContainerRef.current.offsetWidth);
  }, []);

  return (
    <HorizontalRecipeListContainer listHeight={listHeight} cardContainerWidth={cardContainerWidth}>
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
    </HorizontalRecipeListContainer>
  );
};

export default HorizontalRecipeList;
