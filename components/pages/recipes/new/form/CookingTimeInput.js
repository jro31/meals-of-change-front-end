import { useDispatch, useSelector } from 'react-redux';

import useInput from '../../../../../hooks/use-input';
import Input from '../../../../ui/form/Input';
import InputContainer from '../../../../ui/form/InputContainer';
import { newRecipeFormActions } from '../../../../../store/new-recipe-form';

const CookingTimeInput = () => {
  const dispatch = useDispatch();
  const enteredCookingTime = useSelector(state => state.newRecipeForm.enteredCookingTime);
  const enteredCookingTimeIsValid = useSelector(
    state => state.newRecipeForm.enteredCookingTimeIsValid
  );

  const cookingTimeChangeHandler = value => {
    dispatch(newRecipeFormActions.setEnteredCookingTime(value));
  };

  const cookingTimeInputIsValid = value => value.trim().length > 0;

  const { isTouched, inputBlurHandler, valueChangeHandler } = useInput(
    cookingTimeChangeHandler,
    cookingTimeInputIsValid
  );

  return (
    <InputContainer>
      <Input
        type='number'
        required
        id='cooking_time'
        value={enteredCookingTime}
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
        label='From start to finish, how many minutes does this recipe take?'
        showError={isTouched && !enteredCookingTimeIsValid}
        errorMessage='Please enter the number of minutes this recipe takes to cook'
      />
    </InputContainer>
  );
};

export default CookingTimeInput;
