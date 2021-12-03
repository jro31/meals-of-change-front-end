import { useSelector } from 'react-redux';

import useInput from '../../../../../hooks/use-input';
import FormLine from '../../../../ui/form/FormLine';
import Input from '../../../../ui/form/Input';
import InputContainer from '../../../../ui/form/InputContainer';
import { newRecipeFormActions } from '../../../../../store/new-recipe-form';

const NameInput = () => {
  const enteredName = useSelector(state => state.newRecipeForm.enteredName);
  const enteredNameIsValid = useSelector(state => state.newRecipeForm.enteredNameIsValid);
  const inputIsTouched = useSelector(state => state.newRecipeForm.nameInputIsTouched);

  const nameInputValidation = value => value.trim().length > 0;

  const { valueChangeHandler, inputBlurHandler } = useInput(
    newRecipeFormActions.setEnteredName,
    nameInputValidation,
    newRecipeFormActions.setEnteredNameIsValid,
    newRecipeFormActions.setNameInputIsTouched
  );

  return (
    <FormLine>
      <InputContainer>
        <Input
          required
          id='name'
          value={enteredName}
          onChange={valueChangeHandler}
          onBlur={inputBlurHandler}
          label='What is the name of your recipe?'
          showError={inputIsTouched && !enteredNameIsValid}
          errorMessage='Please enter a name for your recipe'
        />
      </InputContainer>
    </FormLine>
  );
};

export default NameInput;
