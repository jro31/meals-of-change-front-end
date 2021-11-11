import { Fragment } from 'react';

const RecipeCard = props => {
  return (
    <Fragment>
      <div>{props.recipe.name}</div>
      <div>{props.recipe.photo}</div>
    </Fragment>
  );
};

export default RecipeCard;
