import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AmountInput from './AmountInput';
import FoodInput from './FoodInput';
import OptionalCheckbox from './OptionalCheckbox';
import PreparationInput from './PreparationInput';

const IngredientInputSection = props => {
  const dispatch = useDispatch();
  const addedIngredients = useSelector(state => state.newRecipeForm.addedIngredients);

  const addIngredientHandler = () => {
    // Check inputs are valid
    // Add input values to 'addedIngredients' as object (if valid)
    // Reset ingredient inputs
  };

  return (
    <Fragment>
      {addedIngredients.map(ingredient => {
        <div>{ingredient.food}</div>;
      })}
      <AmountInput />
      <FoodInput />
      <PreparationInput />
      <OptionalCheckbox />
      <button onClick={addIngredientHandler}>Add ingredient</button>
    </Fragment>
  );
};

export default IngredientInputSection;
