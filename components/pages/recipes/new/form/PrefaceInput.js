import { useSelector } from 'react-redux';

import useInput from '../../../../../hooks/use-input';
import { newRecipeFormActions } from '../../../../../store/new-recipe-form';
import TextArea from '../../../../ui/form/TextArea';

const PrefaceInput = () => {
  const enteredPreface = useSelector(state => state.newRecipeForm.enteredPreface);

  const { valueChangeHandler } = useInput(newRecipeFormActions.setEnteredPreface);

  // TODO - Add a limit of 1000(?) characters to this input (it should match the validation on the backend)
  return (
    <TextArea
      id='preface'
      value={enteredPreface}
      onChange={valueChangeHandler}
      label='What is the story of your recipe?'
    />
  );
};

export default PrefaceInput;
