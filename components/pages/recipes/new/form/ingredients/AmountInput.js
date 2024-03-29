import { useSelector } from 'react-redux';

import useInput from '../../../../../../hooks/use-input';
import Input from '../../../../../ui/form/Input';
import { newRecipeFormActions } from '../../../../../../store/new-recipe-form';

const AmountInput = props => {
  const enteredAmount = useSelector(state => state.newRecipeForm.enteredIngredientAmount);

  const { valueChangeHandler } = useInput(newRecipeFormActions.setEnteredIngredientAmount);

  return (
    <Input
      id='amount'
      value={enteredAmount}
      onChange={valueChangeHandler}
      onKeyDown={props.keyPressHandler}
      label='Amount'
      className='lg:basis-1/4'
    />
  );
};

export default AmountInput;
