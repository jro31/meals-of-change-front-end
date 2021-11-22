import useInput from '../../../../../hooks/use-input';

import Input from '../../../../ui/form/Input';

const CookingTimeInput = () => {
  const cookingTimeInputIsValid = value => value.trim().length > 0;

  const {
    value: enteredCookingTime,
    isValid: enteredCookingTimeIsValid,
    hasError: cookingTimeInputHasError,
    inputBlurHandler: cookingTimeBlurHandler,
    valueChangeHandler: cookingTimeChangeHandler,
  } = useInput(cookingTimeInputIsValid);

  return (
    <Input
      type='number'
      required
      id='cooking_time'
      value={enteredCookingTime}
      onChange={cookingTimeChangeHandler}
      onBlur={cookingTimeBlurHandler}
      label='From start to finish, how many minutes does this recipe take?'
      showError={cookingTimeInputHasError}
      errorMessage='Please enter the number of minutes this recipe takes to cook'
    />
  );
};

export default CookingTimeInput;
