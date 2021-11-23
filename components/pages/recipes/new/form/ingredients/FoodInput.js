import { useDispatch, useSelector } from 'react-redux';

import useInput from '../../../../../../hooks/use-input';
import Input from '../../../../../ui/form/Input';
import InputContainer from '../../../../../ui/form/InputContainer';
import { newRecipeFormActions } from '../../../../../../store/new-recipe-form';

const FoodInput = () => {
  const dispatch = useDispatch();
  const enteredFood = useSelector(state => state.newRecipeForm.enteredIngredientFood);
  const enteredFoodIsValid = useSelector(state => state.newRecipeForm.enteredIngredientFoodIsValid);
  const inputIsTouched = useSelector(state => state.newRecipeForm.ingredientFoodInputIsTouched);
  const addIngredientButtonIsClicked = useSelector(
    state => state.newRecipeForm.addIngredientButtonIsClicked
  );

  const foodChangeHandler = value => {
    dispatch(newRecipeFormActions.setEnteredIngredientFood(value));
  };

  const setFoodInputIsValid = value => {
    dispatch(newRecipeFormActions.setEnteredIngredientFoodIsValid(value));
  };

  const setFoodInputIsTouched = () => {
    dispatch(newRecipeFormActions.setIngredientFoodInputIsTouched());
  };

  const foodInputValidation = value => value.trim().length > 0;

  const { inputBlurHandler, valueChangeHandler } = useInput(
    foodChangeHandler,
    foodInputValidation,
    setFoodInputIsValid,
    setFoodInputIsTouched
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
