import { Fragment } from 'react';
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
    <Fragment>
      <label htmlFor='name'>What is the name of your recipe?</label>
      <Input
        type='text'
        required
        id='name'
        value={enteredName}
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
      />
      {nameInputHasError && <p>ERROR!</p>}
    </Fragment>
  );
};

export default NameInput;
