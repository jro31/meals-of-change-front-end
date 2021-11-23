const useCheckbox = (setIsChecked, mustBeChecked = false, setIsValid = null) => {
  const isValid = () => {
    if (mustBeChecked) {
      return isChecked;
    }
    return true;
  };

  const valueChangeHandler = event => {
    setIsChecked(event.target.checked);
    if (setIsValid) {
      setIsValid(isValid(event.target.checked));
    }
  };

  return {
    valueChangeHandler,
  };
};

export default useCheckbox;
