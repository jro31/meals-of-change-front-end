import RecipeCard from './RecipeCard';

const RecipeList = props => {
  return (
    <div>
      {props.recipes.map(recipe => {
        return <RecipeCard key={recipe.id} recipe={recipe} />;
      })}
    </div>
  );
};
// When it comes time to add horizontal scrolling (particularly on mobile) see https://css-tricks.com/practical-css-scroll-snapping/
// Is a great example of how this is used well https://www.kitchenstories.com/en

export default RecipeList;
