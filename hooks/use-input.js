import { useState } from 'react';

const useInput = (valueValidator = null, initialValue = '') => {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);

  const isValid = () => {
    if (valueValidator) {
      return valueValidator(enteredValue);
    }
    return true;
  };
  const hasError = !isValid && isTouched;

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    isValid: isValid(),
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
