import { useSelector } from 'react-redux';

import useInput from '../../../../../hooks/use-input';
import Input from '../../../../ui/form/Input';
import { newRecipeFormActions } from '../../../../../store/new-recipe-form';

const CookingTimeInput = props => {
  const enteredCookingTime = useSelector(state => state.newRecipeForm.enteredCookingTime);
  const enteredCookingTimeIsValid = useSelector(
    state => state.newRecipeForm.enteredCookingTimeIsValid
  );
  const inputIsTouched = useSelector(state => state.newRecipeForm.cookingTimeInputIsTouched);

  const cookingTimeInputValidation = value => value.trim().length > 0 && value > 0;

  const { valueChangeHandler, inputBlurHandler } = useInput(
    newRecipeFormActions.setEnteredCookingTime,
    cookingTimeInputValidation,
    newRecipeFormActions.setEnteredCookingTimeIsValid,
    newRecipeFormActions.setCookingTimeInputIsTouched
  );

  return (
    <Input
      type='number'
      required
      id='cooking-time'
      value={enteredCookingTime}
      onChange={valueChangeHandler}
      onBlur={inputBlurHandler}
      label='Cooking time (minutes)*'
      showError={inputIsTouched && !enteredCookingTimeIsValid}
      errorMessage='This field is required'
      className={props.className || ''}
      min={1}
    />
  );
};

export default CookingTimeInput;
