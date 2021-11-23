import { useSelector } from 'react-redux';

import useInput from '../../../../../hooks/use-input';
import Input from '../../../../ui/form/Input';
import InputContainer from '../../../../ui/form/InputContainer';
import { newRecipeFormActions } from '../../../../../store/new-recipe-form';
import FormLine from '../../../../ui/form/FormLine';

const CookingTimeInput = () => {
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
    <FormLine>
      <InputContainer>
        <Input
          type='number'
          required
          id='cooking_time'
          value={enteredCookingTime}
          onChange={valueChangeHandler}
          onBlur={inputBlurHandler}
          label='From start to finish, how many minutes does this recipe take?'
          showError={inputIsTouched && !enteredCookingTimeIsValid}
          errorMessage='Please enter the number of minutes this recipe takes to cook'
        />
      </InputContainer>
    </FormLine>
  );
};

export default CookingTimeInput;
