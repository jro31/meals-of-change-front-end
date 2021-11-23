import { useDispatch, useSelector } from 'react-redux';

import useInput from '../../../../../hooks/use-input';
import Input from '../../../../ui/form/Input';
import InputContainer from '../../../../ui/form/InputContainer';
import { newRecipeFormActions } from '../../../../../store/new-recipe-form';

const NameInput = () => {
  const dispatch = useDispatch();
  const enteredName = useSelector(state => state.newRecipeForm.enteredName);
  const enteredNameIsValid = useSelector(state => state.newRecipeForm.enteredNameIsValid);

  const nameChangeHandler = value => {
    dispatch(newRecipeFormActions.setEnteredName(value));
  };

  const nameInputIsValid = value => value.trim().length > 0;

  const { isTouched, inputBlurHandler, valueChangeHandler } = useInput(
    nameChangeHandler,
    nameInputIsValid
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
        showError={isTouched && !enteredNameIsValid}
        errorMessage='Please enter a name for your recipe'
      />
    </InputContainer>
  );
};

export default NameInput;
