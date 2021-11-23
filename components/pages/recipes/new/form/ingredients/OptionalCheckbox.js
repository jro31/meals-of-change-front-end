import { useSelector } from 'react-redux';

import useInput from '../../../../../../hooks/use-input';
import Input from '../../../../../ui/form/Input';
import InputContainer from '../../../../../ui/form/InputContainer';
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
    <InputContainer>
      <Input
        type='checkbox'
        id='optional'
        checked={isOptional}
        onChange={valueChangeHandler}
        label='This ingredient is optional'
      />
    </InputContainer>
  );
};

export default OptionalCheckbox;
