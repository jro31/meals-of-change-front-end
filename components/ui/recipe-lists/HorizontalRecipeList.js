import { useRef, useState, useEffect } from 'react';

import RecipeCard from '../RecipeCard';
import classes from './HorizontalRecipeList.module.css';
import HorizontalRecipeListContainer from './HorizontalRecipeListContainer';

const HorizontalRecipeList = props => {
  const firstCardContainerRef = useRef();
  const [cardContainerWidth, setCardContainerWidth] = useState(450);

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

  useEffect(() => {
    setCardContainerWidth(firstCardContainerRef.current.offsetWidth);
  }, []);

  return (
    <HorizontalRecipeListContainer
      containerHeight={props.height}
      cardContainerWidth={cardContainerWidth}
      tiers={props.tiers}
    >
      {props.recipes.map((recipe, index) => {
        return (
          <div
            key={recipe.id}
            className={`${classes['card-container']} ${tiersClass()} ${
              index < props.tiers ? classes['first-column-indent'] : ''
            }`}
            ref={recipe === props.recipes[0] ? firstCardContainerRef : null}
          >
            <RecipeCard recipe={recipe} />
          </div>
        );
      })}
    </HorizontalRecipeListContainer>
  );
};

export default HorizontalRecipeList;
