import { useDispatch } from 'react-redux';

const useInput = (
  setEnteredValueAction,
  validation = null,
  setIsValidAction = null,
  setIsTouchedAction = null,
  inputType = 'text'
) => {
  const dispatch = useDispatch();

  const isValid = value => {
    if (validation) {
      return validation(value);
    }
    return true;
  };

  const valueChangeHandler = event => {
    const inputValue = inputType === 'checkbox' ? event.target.checked : event.target.value;

    dispatch(setEnteredValueAction(inputValue));
    if (setIsValidAction) {
      dispatch(setIsValidAction(isValid(inputValue)));
    }
  };

  const inputBlurHandler = () => {
    if (setIsTouchedAction) {
      dispatch(setIsTouchedAction());
    }
  };

  return {
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
