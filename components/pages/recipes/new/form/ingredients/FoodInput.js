import useInput from '../../../../../../hooks/use-input';

import Input from '../../../../../ui/form/Input';
import InputContainer from '../../../../../ui/form/InputContainer';

const FoodInput = () => {
  const foodInputIsValid = value => value.trim().length > 0;

  const {
    value,
    isValid: enteredFoodIsValid,
    hasError,
    inputBlurHandler,
    valueChangeHandler,
  } = useInput(foodInputIsValid);

  return (
    <InputContainer>
      <Input
        required
        id='food'
        value={value}
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
