import { useDispatch, useSelector } from 'react-redux';

import useCheckbox from '../../../../../../hooks/use-checkbox';
import Input from '../../../../../ui/form/Input';
import InputContainer from '../../../../../ui/form/InputContainer';
import { newRecipeFormActions } from '../../../../../../store/new-recipe-form';

const OptionalCheckbox = () => {
  const dispatch = useDispatch();
  const isOptional = useSelector(state => state.newRecipeForm.ingredientIsOptional);

  const isOptionalChangeHandler = value => {
    dispatch(newRecipeFormActions.setIngredientIsOptional(value));
  };

  const { valueChangeHandler } = useCheckbox(isOptional, isOptionalChangeHandler);

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
