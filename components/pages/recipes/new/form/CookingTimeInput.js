import useInput from '../../../../../hooks/use-input';

import Input from '../../../../ui/form/Input';
import InputContainer from '../../../../ui/form/InputContainer';

const CookingTimeInput = () => {
  const cookingTimeInputIsValid = value => value.trim().length > 0;

  const {
    value,
    isValid: enteredCookingTimeIsValid,
    hasError,
    inputBlurHandler,
    valueChangeHandler,
  } = useInput(cookingTimeInputIsValid);

  return (
    <InputContainer>
      <Input
        type='number'
        required
        id='cooking_time'
        value={value}
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
