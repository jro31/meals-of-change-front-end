import Flexbox from '../styles/Flexbox';
import classes from './RecipeCard.module.css';

const RecipeCard = props => {
  return (
    <Flexbox column className={`${classes['recipe-card']} ${props.className}`}>
      <div className={classes['photo-container']}>
        <img src={props.recipe.photo} />
      </div>
      <Flexbox column justifyAround className={classes['info-container']}>
        <div>{props.recipe.name}</div>
        <Flexbox justifyBetween w100>
          <div>{props.recipe.author}</div>
          <div>{`${props.recipe.timeMinutes} minutes`}</div>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  );
};

export default RecipeCard;
