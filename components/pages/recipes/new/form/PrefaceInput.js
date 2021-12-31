import { useSelector } from 'react-redux';

import useInput from '../../../../../hooks/use-input';
import InputContainer from '../../../../ui/form/InputContainer';
import { newRecipeFormActions } from '../../../../../store/new-recipe-form';
import TextArea from '../../../../ui/form/TextArea';

const PrefaceInput = () => {
  const enteredPreface = useSelector(state => state.newRecipeForm.enteredPreface);

  const { valueChangeHandler } = useInput(newRecipeFormActions.setEnteredPreface);

  return (
    <InputContainer>
      {/* TODO - Add a limit of 1000(?) characters to this input (it should match the validation on the backend) */}
      <TextArea
        id='preface'
        value={enteredPreface}
        onChange={valueChangeHandler}
        label='What is the story of your recipe?'
      />
    </InputContainer>
  );
};

export default PrefaceInput;
