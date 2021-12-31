import { useSelector } from 'react-redux';

import useInput from '../../../../../hooks/use-input';
import Input from '../../../../ui/form/Input';
import { newRecipeFormActions } from '../../../../../store/new-recipe-form';

const NameInput = props => {
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
    <Input
      required
      id='name'
      value={enteredName}
      onChange={valueChangeHandler}
      onBlur={inputBlurHandler}
      label='What is the name of your recipe?'
      showError={inputIsTouched && !enteredNameIsValid}
      errorMessage='Enter a name for your recipe'
      className={props.className || ''}
    />
  );
};

export default NameInput;
