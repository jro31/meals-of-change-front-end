import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AmountInput from './AmountInput';
import FoodInput from './FoodInput';
import OptionalCheckbox from './OptionalCheckbox';
import PreparationInput from './PreparationInput';
import { newRecipeFormActions } from '../../../../../../store/new-recipe-form';
import Button from '../../../../../ui/Button';

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
      <div className='flex justify-center'>
        <div className='flex flex-col items-end basis-2/3'>
          {addedIngredients.map((ingredient, index) => (
            <div key={ingredient.tempId} className={`flex justify-end py-1 items-center w-full`}>
              <div
                className={`flex justify-end items-center basis-3/4 h-full pr-2 py-2 rounded-xl ${
                  index % 2 === 0 ? 'bg-slate-500' : 'bg-slate-800'
                }`}
              >
                {ingredient.amount && <div>{ingredient.amount}&#160;&#160;</div>}
                <div className='font-bold'>{ingredient.food}</div>
                {ingredient.preparation && <div>&#160;&#160;{ingredient.preparation}</div>}
                {ingredient.optional && <div>&#160;&#160;(optional)</div>}
              </div>
              <Button
                theme='cancel'
                size='small'
                onClick={deleteIngredientHandler.bind(null, ingredient.tempId)}
                className='ml-1'
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-1'>
        <AmountInput />
        <FoodInput />
        <PreparationInput />
      </div>
      <div className='flex justify-between mt-2'>
        <OptionalCheckbox />
        <Button
          theme='cancel'
          size='small'
          disabled={!enteredIngredientFoodIsValid}
          onClick={addIngredientButtonClicked}
        >
          Add ingredient
        </Button>
      </div>
    </Fragment>
  );
};

export default IngredientInputSection;
