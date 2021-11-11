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

export default RecipeList;
