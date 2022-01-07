import RecipeCard from './RecipeCard';
import HorizontalRecipeListContainer from './HorizontalRecipeListContainer';

const HorizontalRecipeList = props => {
  return (
    <HorizontalRecipeListContainer title={props.title} page={props.page}>
      {/* TODO - Only load recipes as a user scrolls (save loading too many unnecessary photos) */}
      {/* TODO - Handle 'props.recipes' being an empty array */}
      {props.recipes.map(recipe => {
        return (
          <div key={recipe.id} className={`snap-start scroll-ml-1/12-screen h-[375px]`}>
            <RecipeCard recipe={recipe} />
          </div>
        );
      })}
    </HorizontalRecipeListContainer>
  );
};

export default HorizontalRecipeList;
