import { useDispatch, useSelector } from 'react-redux';

import useInput from '../../../../../../hooks/use-input';
import Input from '../../../../../ui/form/Input';
import InputContainer from '../../../../../ui/form/InputContainer';
import { newRecipeFormActions } from '../../../../../../store/new-recipe-form';

const PreparationInput = () => {
  const dispatch = useDispatch();
  const enteredPreparation = useSelector(state => state.newRecipeForm.enteredIngredientPreparation);

  const preparationChangeHandler = value => {
    dispatch(newRecipeFormActions.setEnteredIngredientPreparation(value));
  };

  const { valueChangeHandler } = useInput(enteredPreparation, preparationChangeHandler);

  return (
    <InputContainer>
      <Input
        id='preparation'
        value={enteredPreparation}
        onChange={valueChangeHandler}
        placeholder='Preparation (optional)'
      />
    </InputContainer>
  );
};

export default PreparationInput;
