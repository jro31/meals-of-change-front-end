import { useSelector } from 'react-redux';

import useInput from '../../../../../../hooks/use-input';
import Input from '../../../../../ui/form/Input';
import { newRecipeFormActions } from '../../../../../../store/new-recipe-form';

const PreparationInput = () => {
  const enteredPreparation = useSelector(state => state.newRecipeForm.enteredIngredientPreparation);

  const { valueChangeHandler } = useInput(newRecipeFormActions.setEnteredIngredientPreparation);

  return (
    <Input
      id='preparation'
      value={enteredPreparation}
      onChange={valueChangeHandler}
      placeholder='Preparation (optional)'
    />
  );
};

export default PreparationInput;
