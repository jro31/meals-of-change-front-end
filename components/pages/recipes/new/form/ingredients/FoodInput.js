import { useDispatch, useSelector } from 'react-redux';

import useInput from '../../../../../../hooks/use-input';
import Input from '../../../../../ui/form/Input';
import InputContainer from '../../../../../ui/form/InputContainer';
import { newRecipeFormActions } from '../../../../../../store/new-recipe-form';

const FoodInput = () => {
  const dispatch = useDispatch();
  const enteredFood = useSelector(state => state.newRecipeForm.enteredIngredientFood);
  const enteredFoodIsValid = useSelector(state => state.newRecipeForm.enteredIngredientFoodIsValid);

  const foodChangeHandler = value => {
    dispatch(newRecipeFormActions.setEnteredIngredientFood(value));
  };

  const setFoodInputIsValid = value => {
    dispatch(newRecipeFormActions.setEnteredIngredientFoodIsValid(value));
  };

  const foodInputValidation = value => value.trim().length > 0;

  const { isTouched, inputBlurHandler, valueChangeHandler } = useInput(
    foodChangeHandler,
    foodInputValidation,
    setFoodInputIsValid
  );

  return (
    <InputContainer>
      <Input
        required
        id='food'
        value={enteredFood}
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
        showError={isTouched && !enteredFoodIsValid}
        errorMessage='Enter an ingredient'
        placeholder='Ingredient'
      />
    </InputContainer>
  );
};

export default FoodInput;
