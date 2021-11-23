import { useDispatch, useSelector } from 'react-redux';

import useInput from '../../../../../hooks/use-input';
import Input from '../../../../ui/form/Input';
import InputContainer from '../../../../ui/form/InputContainer';
import { newRecipeFormActions } from '../../../../../store/new-recipe-form';

const NameInput = () => {
  const dispatch = useDispatch();
  const enteredName = useSelector(state => state.newRecipeForm.enteredName);
  const enteredNameIsValid = useSelector(state => state.newRecipeForm.enteredNameIsValid);
  const inputIsTouched = useSelector(state => state.newRecipeForm.nameInputIsTouched);

  const nameChangeHandler = value => {
    dispatch(newRecipeFormActions.setEnteredName(value));
  };

  const setNameInputIsValid = value => {
    dispatch(newRecipeFormActions.setEnteredNameIsValid(value));
  };

  const setNameInputIsTouched = () => {
    dispatch(newRecipeFormActions.setNameInputIsTouched());
  };

  const nameInputValidation = value => value.trim().length > 0;

  const { inputBlurHandler, valueChangeHandler } = useInput(
    nameChangeHandler,
    nameInputValidation,
    setNameInputIsValid,
    setNameInputIsTouched
  );

  return (
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
  );
};

export default NameInput;
