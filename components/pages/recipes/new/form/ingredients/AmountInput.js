import useInput from '../../../../../../hooks/use-input';

import Input from '../../../../../ui/form/Input';
import InputContainer from '../../../../../ui/form/InputContainer';

const AmountInput = () => {
  const { value, valueChangeHandler } = useInput();

  return (
    <InputContainer>
      <Input
        id='amount'
        value={value}
        onChange={valueChangeHandler}
        placeholder='Amount (optional)'
      />
    </InputContainer>
  );
};

export default AmountInput;
