import { useDispatch } from 'react-redux';

const useInput = (
  setEnteredValueAction,
  validation = null,
  setIsValidAction = null,
  setIsTouchedAction = null
) => {
  const dispatch = useDispatch();

  const isValid = value => {
    if (validation) {
      return validation(value);
    }
    return true;
  };

  const valueChangeHandler = event => {
    dispatch(setEnteredValueAction(event.target.value));
    if (setIsValidAction) {
      dispatch(setIsValidAction(isValid(event.target.value)));
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
