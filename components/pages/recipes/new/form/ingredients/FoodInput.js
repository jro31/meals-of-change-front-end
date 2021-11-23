import { useDispatch, useSelector } from 'react-redux';

import useInput from '../../../../../../hooks/use-input';
import Input from '../../../../../ui/form/Input';
import InputContainer from '../../../../../ui/form/InputContainer';
import { newRecipeFormActions } from '../../../../../../store/new-recipe-form';

const FoodInput = () => {
  const dispatch = useDispatch();
  const enteredFood = useSelector(state => state.newRecipeForm.enteredIngredientFood);

  const foodChangeHandler = value => {
    dispatch(newRecipeFormActions.setEnteredIngredientFood(value));
  };

  const foodInputIsValid = value => value.trim().length > 0;

  const {
    isValid: enteredFoodIsValid,
    hasError,
    inputBlurHandler,
    valueChangeHandler,
  } = useInput(enteredFood, foodChangeHandler, foodInputIsValid);

  return (
    <InputContainer>
      <Input
        required
        id='food'
        value={enteredFood}
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
        showError={hasError}
        errorMessage='Enter an ingredient'
        placeholder='Ingredient'
      />
    </InputContainer>
  );
};

export default FoodInput;
