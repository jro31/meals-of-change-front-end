import { useSelector } from 'react-redux';

import useInput from '../../../../../../hooks/use-input';
import Input from '../../../../../ui/form/Input';
import InputContainer from '../../../../../ui/form/InputContainer';
import { newRecipeFormActions } from '../../../../../../store/new-recipe-form';

const FoodInput = () => {
  const enteredFood = useSelector(state => state.newRecipeForm.enteredIngredientFood);

  const foodInputValidation = value => value.trim().length > 0;

  const { valueChangeHandler, inputBlurHandler } = useInput(
    newRecipeFormActions.setEnteredIngredientFood,
    foodInputValidation,
    newRecipeFormActions.setEnteredIngredientFoodIsValid
  );

  return (
    <InputContainer>
      <Input
        required
        id='food'
        value={enteredFood}
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
        placeholder='Ingredient'
      />
    </InputContainer>
  );
};

export default FoodInput;
