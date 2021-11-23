import { useDispatch, useSelector } from 'react-redux';

import useInput from '../../../../../../hooks/use-input';
import Input from '../../../../../ui/form/Input';
import InputContainer from '../../../../../ui/form/InputContainer';
import { newRecipeFormActions } from '../../../../../../store/new-recipe-form';

const AmountInput = () => {
  const dispatch = useDispatch();
  const enteredAmount = useSelector(state => state.newRecipeForm.enteredIngredientAmount);

  const amountChangeHandler = value => {
    dispatch(newRecipeFormActions.setEnteredIngredientAmount(value));
  };

  const { valueChangeHandler } = useInput(enteredAmount, amountChangeHandler);

  return (
    <InputContainer>
      <Input
        id='amount'
        value={enteredAmount}
        onChange={valueChangeHandler}
        placeholder='Amount (optional)'
      />
    </InputContainer>
  );
};

export default AmountInput;
