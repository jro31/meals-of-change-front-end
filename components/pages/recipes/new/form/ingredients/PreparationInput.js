import useInput from '../../../../../../hooks/use-input';

import Input from '../../../../../ui/form/Input';
import InputContainer from '../../../../../ui/form/InputContainer';

const PreparationInput = () => {
  const { value, valueChangeHandler } = useInput();

  return (
    <InputContainer>
      <Input
        id='preparation'
        value={value}
        onChange={valueChangeHandler}
        placeholder='Preparation (optional)'
      />
    </InputContainer>
  );
};

export default PreparationInput;
