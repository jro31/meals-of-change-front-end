import { useRef, useState, useEffect } from 'react';

import RecipeCard from './RecipeCard';
import HorizontalRecipeListContainer from './HorizontalRecipeListContainer';

const HorizontalRecipeList = props => {
  const firstCardContainerRef = useRef();
  const [cardContainerWidth, setCardContainerWidth] = useState(450);

  const tiersClass = () => {
    switch (props.tiers) {
      case 1:
        return 'h-full';
      case 2:
        return 'h-1/2';
      case 3:
        return 'h-1/3';
      default:
        return 'h-full';
    }
  };

  useEffect(() => {
    setCardContainerWidth(firstCardContainerRef.current.offsetWidth);
  }, []);

  return (
    // TODO - Is it possible to update this component to generate tiers dynamically, without a page refresh?
    // Currently if, for example, someone is on an iPad and the change the orientation, the number of tiers displayed will be incorrect

    <HorizontalRecipeListContainer
      containerHeight={props.height}
      cardContainerWidth={cardContainerWidth}
      tiers={props.tiers}
    >
      {/* TODO - Only load recipes as a user scrolls (save loading too many unnecessary photos) */}
      {props.recipes.map((recipe, index) => {
        return (
          <div
            key={recipe.id}
            className={`snap-start scroll-ml-1/12-screen ${tiersClass()} ${
              index < props.tiers ? 'pl-1/12' : ''
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
