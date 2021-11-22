import useInput from '../../../../../hooks/use-input';

import Input from '../../../../ui/form/Input';
import InputContainer from '../../../../ui/form/InputContainer';

const NameInput = props => {
  const { enteredName, setEnteredName } = props;

  const nameInputIsValid = value => value.trim().length > 0;

  const {
    isValid: enteredNameIsValid,
    hasError,
    inputBlurHandler,
    valueChangeHandler,
  } = useInput(enteredName, setEnteredName, nameInputIsValid);

  return (
    <InputContainer>
      <Input
        required
        id='name'
        value={enteredName}
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
        label='What is the name of your recipe?'
        showError={hasError}
        errorMessage='Please enter a name for your recipe'
      />
    </InputContainer>
  );
};

export default NameInput;
