const useCheckbox = (isChecked, setIsChecked, mustBeChecked = false) => {
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
    isValid: isValid(),
    valueChangeHandler,
  };
};

export default useCheckbox;
