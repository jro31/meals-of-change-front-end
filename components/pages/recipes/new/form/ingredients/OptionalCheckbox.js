import useCheckbox from '../../../../../../hooks/use-checkbox';

import Input from '../../../../../ui/form/Input';
import InputContainer from '../../../../../ui/form/InputContainer';

const OptionalCheckbox = () => {
  const { isChecked, valueChangeHandler } = useCheckbox();

  return (
    <InputContainer>
      <Input
        type='checkbox'
        id='optional'
        checked={isChecked}
        onChange={valueChangeHandler}
        label='This ingredient is optional'
      />
    </InputContainer>
  );
};

export default OptionalCheckbox;
