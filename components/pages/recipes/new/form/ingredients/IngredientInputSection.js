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
    addIngredient();
  };

  const keyPressHandler = event => {
    const key = event.key;

    if (key === 'Enter') {
      event.preventDefault();
      addIngredient();
    }
  };

  const addIngredient = () => {
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
      {addedIngredients[0] && (
        <div className='flex justify-center'>
          <div className='flex flex-col items-end basis-5/6'>
            {addedIngredients.map((ingredient, index) => (
              <div key={ingredient.tempId} className={`flex justify-end py-1 items-center w-full`}>
                <div
                  className={`flex flex-col sm:flex-row justify-end items-center basis-5/6 xl:basis-3/4 grow shrink sm:shrink-0 h-full pr-2 py-2 rounded-xl ${
                    index % 2 === 0 ? 'bg-slate-500' : 'bg-slate-800'
                  }`}
                >
                  {ingredient.amount && (
                    <div>
                      {ingredient.amount}
                      <span className='hidden sm:inline-block'>&#160;&#160;</span>
                    </div>
                  )}
                  <div className='font-bold'>{ingredient.food}</div>
                  {ingredient.preparation && (
                    <div>
                      <span className='hidden sm:inline-block'>&#160;&#160;</span>
                      {ingredient.preparation}
                    </div>
                  )}
                  {ingredient.optional && (
                    <div>
                      <span className='hidden sm:inline-block'>&#160;&#160;</span>(optional)
                    </div>
                  )}
                </div>
                <Button
                  theme='subtle'
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
      )}
      <div className='flex flex-col lg:flex-row gap-1'>
        <AmountInput keyPressHandler={keyPressHandler} />
        <FoodInput keyPressHandler={keyPressHandler} />
        <PreparationInput keyPressHandler={keyPressHandler} />
      </div>
      <div className='flex justify-between mt-2'>
        <OptionalCheckbox />
        <Button
          theme='subtle'
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
