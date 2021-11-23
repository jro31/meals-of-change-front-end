import { useSelector } from 'react-redux';

import useInput from '../../../../../../hooks/use-input';
import Input from '../../../../../ui/form/Input';
import InputContainer from '../../../../../ui/form/InputContainer';
import { newRecipeFormActions } from '../../../../../../store/new-recipe-form';

const FoodInput = () => {
  const enteredFood = useSelector(state => state.newRecipeForm.enteredIngredientFood);
  const enteredFoodIsValid = useSelector(state => state.newRecipeForm.enteredIngredientFoodIsValid);
  const inputIsTouched = useSelector(state => state.newRecipeForm.ingredientFoodInputIsTouched);
  const addIngredientButtonIsClicked = useSelector(
    state => state.newRecipeForm.addIngredientButtonIsClicked
  );

  const foodInputValidation = value => value.trim().length > 0;

  const { valueChangeHandler, inputBlurHandler } = useInput(
    newRecipeFormActions.setEnteredIngredientFood,
    foodInputValidation,
    newRecipeFormActions.setEnteredIngredientFoodIsValid,
    newRecipeFormActions.setIngredientFoodInputIsTouched
  );

  return (
    <InputContainer>
      <Input
        required
        id='food'
        value={enteredFood}
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
        showError={(inputIsTouched || addIngredientButtonIsClicked) && !enteredFoodIsValid}
        errorMessage='Enter an ingredient'
        placeholder='Ingredient'
      />
    </InputContainer>
  );
};

export default FoodInput;
