import { useState } from 'react';

const useInput = (setEnteredValue, valueValidator = null, setIsValid = null) => {
  const [isTouched, setIsTouched] = useState(false);

  const isValid = value => {
    if (valueValidator) {
      return valueValidator(value);
    }
    return true;
  };

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value);
    if (setIsValid) {
      setIsValid(isValid(event.target.value));
    }
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  return {
    isTouched,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
