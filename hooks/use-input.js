import { useState } from 'react';

const useInput = (
  setEnteredValue,
  valueValidator = null,
  setIsValid = null,
  setIsTouched = null
) => {
  // const [isTouched, setIsTouched] = useState(false);

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
    if (setIsTouched) {
      setIsTouched(true);
    }
  };

  // const reset = () => {
  //   setIsTouched(false);
  // };

  return {
    // isTouched,
    valueChangeHandler,
    inputBlurHandler,
    // reset,
  };
};

export default useInput;
