import { useSelector } from 'react-redux';

import useInput from '../../../../../../hooks/use-input';
import { newRecipeFormActions } from '../../../../../../store/new-recipe-form';
import Checkbox from '../../../../../ui/form/Checkbox';

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
    <div className='flex items-center'>
      <Checkbox
        id='optional'
        checked={isOptional}
        onChange={valueChangeHandler}
        label='This ingredient is optional'
      />
    </div>
  );
};

export default OptionalCheckbox;
