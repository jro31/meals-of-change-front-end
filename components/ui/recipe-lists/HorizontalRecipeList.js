import { useRef, useState, useEffect } from 'react';

import RecipeCard from './RecipeCard';
import HorizontalRecipeListContainer from './HorizontalRecipeListContainer';

const HorizontalRecipeList = props => {
  const firstCardContainerRef = useRef();
  const [cardContainerWidth, setCardContainerWidth] = useState(450);

  useEffect(() => {
    setCardContainerWidth(firstCardContainerRef.current.offsetWidth);
  }, []);

  return (
    <HorizontalRecipeListContainer cardContainerWidth={cardContainerWidth} title={props.title}>
      {/* TODO - Only load recipes as a user scrolls (save loading too many unnecessary photos) */}
      {/* TODO - Handle 'props.recipes' being an empty array */}
      {props.recipes.map(recipe => {
        return (
          <div
            key={recipe.id}
            className={`snap-start scroll-ml-1/12-screen h-[375px]`}
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
