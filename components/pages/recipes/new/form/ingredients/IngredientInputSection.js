import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AmountInput from './AmountInput';
import FoodInput from './FoodInput';
import OptionalCheckbox from './OptionalCheckbox';
import PreparationInput from './PreparationInput';
import { newRecipeFormActions } from '../../../../../../store/new-recipe-form';
import FormLine from '../../../../../ui/form/FormLine';

let ingredientIterator = 0;

const IngredientInputSection = () => {
  const dispatch = useDispatch();
  const addedIngredients = useSelector(state => state.newRecipeForm.addedIngredients);
  const enteredIngredientFoodIsValid = useSelector(
    state => state.newRecipeForm.enteredIngredientFoodIsValid
  );
  const enteredAmount = useSelector(state => state.newRecipeForm.enteredIngredientAmount);
  const enteredFood = useSelector(state => state.newRecipeForm.enteredIngredientFood);
  const enteredPreparation = useSelector(state => state.newRecipeForm.enteredIngredientPreparation);
  const isOptional = useSelector(state => state.newRecipeForm.ingredientIsOptional);

  const addIngredientHandler = event => {
    event.preventDefault();
    dispatch(newRecipeFormActions.setAddIngredientButtonIsClicked());

    if (enteredIngredientFoodIsValid) {
      ingredientIterator++;

      const newIngredient = {
        key: `Ingredient ${ingredientIterator}`,
        amount: enteredAmount,
        food: enteredFood,
        preparation: enteredPreparation,
        optional: isOptional,
      };

      dispatch(newRecipeFormActions.setAddedIngredients(newIngredient));
      dispatch(newRecipeFormActions.resetEnteredIngredient());
    }
  };

  return (
    <Fragment>
      {addedIngredients.map(ingredient => {
        return (
          <FormLine key={ingredient.key}>
            <div>{ingredient.amount}</div>
            <div>{ingredient.food}</div>
            <div>{ingredient.preparation}</div>
            <div>{ingredient.optional.toString()}</div>
          </FormLine>
        );
      })}
      <FormLine>
        <AmountInput />
        <FoodInput />
        <PreparationInput />
        <OptionalCheckbox />
      </FormLine>
      <button onClick={addIngredientHandler}>Add ingredient</button>
    </Fragment>
  );
};

export default IngredientInputSection;
