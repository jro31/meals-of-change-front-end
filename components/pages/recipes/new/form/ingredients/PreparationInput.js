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
      label='Preparation'
      className='basis-1/4'
    />
  );
};

export default PreparationInput;
