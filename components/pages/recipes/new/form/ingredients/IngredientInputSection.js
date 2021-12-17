import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AmountInput from './AmountInput';
import FoodInput from './FoodInput';
import OptionalCheckbox from './OptionalCheckbox';
import PreparationInput from './PreparationInput';
import { newRecipeFormActions } from '../../../../../../store/new-recipe-form';
import FormLine from '../../../../../ui/form/FormLine';

const IngredientInputSection = props => {
  const dispatch = useDispatch();
  const addedIngredients = useSelector(state => state.newRecipeForm.addedIngredients);
  const enteredIngredientFoodIsValid = useSelector(
    state => state.newRecipeForm.enteredIngredientFoodIsValid
  );

  const addIngredientButtonClicked = event => {
    event.preventDefault();
    props.addIngredientHandler();
    if (enteredIngredientFoodIsValid) {
      dispatch(newRecipeFormActions.resetEnteredIngredient());
    }
  };

  const deleteIngredientHandler = tempId => {
    dispatch(newRecipeFormActions.deleteAddedIngredient(tempId)); // TODO - Use the array index, rather than tempId
  };

  return (
    <Fragment>
      {addedIngredients.map(ingredient => (
        <FormLine key={ingredient.tempId}>
          <div>{ingredient.amount}</div>
          <div>{ingredient.food}</div>
          <div>{ingredient.preparation}</div>
          <div>{ingredient.optional.toString()}</div>
          <div onClick={deleteIngredientHandler.bind(null, ingredient.tempId)}>DELETE</div>
        </FormLine>
      ))}
      <FormLine>
        <AmountInput />
        <FoodInput />
        <PreparationInput />
        <OptionalCheckbox />
      </FormLine>
      <button disabled={!enteredIngredientFoodIsValid} onClick={addIngredientButtonClicked}>
        Add ingredient
      </button>
    </Fragment>
  );
};

export default IngredientInputSection;
