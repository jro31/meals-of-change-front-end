import RecipeCard from './RecipeCard';
import classes from './HorizontalRecipeList.module.css';
import Flexbox from '../styles/Flexbox';

const HorizontalRecipeList = props => {
  return (
    <Flexbox className={classes['horizontal-recipe-list']}>
      {props.recipes.map(recipe => {
        return (
          <div key={recipe.id} className={classes['card-container']}>
            <RecipeCard recipe={recipe} />
          </div>
        );
      })}
    </Flexbox>
  );
};

export default HorizontalRecipeList;
