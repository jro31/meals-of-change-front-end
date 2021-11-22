import { useState } from 'react';

const useCheckbox = (initialValue = false, mustBeChecked = false) => {
  const [isChecked, setIsChecked] = useState(initialValue);

  const isValid = () => {
    if (mustBeChecked) {
      return isChecked;
    }
    return true;
  };

  const valueChangeHandler = event => {
    setIsChecked(event.target.checked);
  };

  return {
    isChecked,
    isValid: isValid(),
    valueChangeHandler,
  };
};

export default useCheckbox;
