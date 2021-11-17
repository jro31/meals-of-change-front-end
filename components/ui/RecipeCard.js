import Flexbox from '../styles/Flexbox';
import classes from './RecipeCard.module.css';

const RecipeCard = props => {
  return (
    <div className={classes['recipe-card']}>
      <Flexbox column className={`${classes['content-container']} ${props.className}`}>
        <div className={classes['photo-container']}>
          <img src={props.recipe.photo} />
        </div>
        <Flexbox column justifyAround className={classes['info-container']}>
          <h3>{props.recipe.name}</h3>
          <Flexbox justifyBetween w100>
            <div>By {props.recipe.author}</div>
            <div>{`${props.recipe.timeMinutes} minutes`}</div>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </div>
  );
};

export default RecipeCard;
