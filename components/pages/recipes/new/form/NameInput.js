import useInput from '../../../../../hooks/use-input';

import Input from '../../../../ui/form/Input';

const NameInput = () => {
  const nameInputIsValid = value => value.trim().length > 0;

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    inputBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
  } = useInput(nameInputIsValid);

  return (
    <Input
      type='text'
      required
      id='name'
      value={enteredName}
      onChange={nameChangeHandler}
      onBlur={nameBlurHandler}
      label='What is the name of your recipe?'
      showError={nameInputHasError}
      errorMessage='Please enter a name for your recipe'
    />
  );
};

export default NameInput;
