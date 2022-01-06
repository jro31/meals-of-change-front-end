import { useSelector } from 'react-redux';

import useInput from '../../../../../../hooks/use-input';
import Input from '../../../../../ui/form/Input';
import { newRecipeFormActions } from '../../../../../../store/new-recipe-form';

const FoodInput = props => {
  const enteredFood = useSelector(state => state.newRecipeForm.enteredIngredientFood);

  const foodInputValidation = value => value.trim().length > 0;

  const { valueChangeHandler, inputBlurHandler } = useInput(
    newRecipeFormActions.setEnteredIngredientFood,
    foodInputValidation,
    newRecipeFormActions.setEnteredIngredientFoodIsValid
  );

  return (
    <Input
      id='food'
      value={enteredFood}
      onChange={valueChangeHandler}
      onBlur={inputBlurHandler}
      onKeyDown={props.keyPressHandler}
      label='Ingredient*'
      className='lg:basis-1/2'
    />
  );
};

export default FoodInput;
