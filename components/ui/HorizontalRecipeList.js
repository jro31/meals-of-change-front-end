import RecipeCard from './RecipeCard';
import classes from './HorizontalRecipeList.module.css';
import Flexbox from '../styles/Flexbox';

const HorizontalRecipeList = props => {
  return (
    <div className={classes['horizontal-recipe-list']}>
      {props.recipes.map(recipe => {
        return (
          <div key={recipe.id} className={classes['card-container']}>
            <RecipeCard recipe={recipe} className={classes['horizontal-recipe-list-recipe']} />
          </div>
        );
      })}
    </div>
  );
};
// When it comes time to add horizontal scrolling (particularly on mobile) see https://css-tricks.com/practical-css-scroll-snapping/
// This is great example of how this is used well https://www.kitchenstories.com/en

export default HorizontalRecipeList;
