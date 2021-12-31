import { useSelector } from 'react-redux';

import useInput from '../../../../../../hooks/use-input';
import Input from '../../../../../ui/form/Input';
import { newRecipeFormActions } from '../../../../../../store/new-recipe-form';

const OptionalCheckbox = () => {
  const isOptional = useSelector(state => state.newRecipeForm.ingredientIsOptional);

  const { valueChangeHandler } = useInput(
    newRecipeFormActions.setIngredientIsOptional,
    null,
    null,
    null,
    'checkbox'
  );

  return (
    <Input
      type='checkbox'
      id='optional'
      checked={isOptional}
      onChange={valueChangeHandler}
      label='This ingredient is optional'
    />
  );
};

export default OptionalCheckbox;
