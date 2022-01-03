import { useSelector } from 'react-redux';

import useInput from '../../../../../../hooks/use-input';
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
    <div className='flex items-center'>
      <input
        type='checkbox'
        id='optional'
        checked={isOptional}
        onChange={valueChangeHandler}
        className='rounded border-slate-500 text-slate-500 focus:ring-0 focus:ring-offset-0 bg-slate-500'
      />
      <label htmlFor='optional' className='ml-1'>
        This ingredient is optional
      </label>
    </div>
  );
};

export default OptionalCheckbox;
