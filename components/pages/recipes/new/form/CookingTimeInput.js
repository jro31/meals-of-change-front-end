import { useDispatch, useSelector } from 'react-redux';

import useInput from '../../../../../hooks/use-input';
import Input from '../../../../ui/form/Input';
import InputContainer from '../../../../ui/form/InputContainer';
import { newRecipeFormActions } from '../../../../../store/new-recipe-form';

const CookingTimeInput = props => {
  const dispatch = useDispatch();
  const enteredCookingTime = useSelector(state => state.newRecipeForm.enteredCookingTime);

  const cookingTimeChangeHandler = value => {
    dispatch(newRecipeFormActions.setEnteredCookingTime(value));
  };

  const cookingTimeInputIsValid = value => value.trim().length > 0;

  const {
    isValid: enteredCookingTimeIsValid,
    hasError,
    inputBlurHandler,
    valueChangeHandler,
  } = useInput(enteredCookingTime, cookingTimeChangeHandler, cookingTimeInputIsValid);

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
        showError={hasError}
        errorMessage='Please enter the number of minutes this recipe takes to cook'
      />
    </InputContainer>
  );
};

export default CookingTimeInput;
