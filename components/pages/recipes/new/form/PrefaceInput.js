import { useSelector } from 'react-redux';

import useInput from '../../../../../hooks/use-input';
import FormLine from '../../../../ui/form/FormLine';
import InputContainer from '../../../../ui/form/InputContainer';
import { newRecipeFormActions } from '../../../../../store/new-recipe-form';
import TextArea from '../../../../ui/form/TextArea';

const PrefaceInput = () => {
  const enteredPreface = useSelector(state => state.newRecipeForm.enteredPreface);

  const { valueChangeHandler } = useInput(newRecipeFormActions.setEnteredPreface);

  return (
    <FormLine>
      <InputContainer>
        <TextArea
          id='preface'
          value={enteredPreface}
          onChange={valueChangeHandler}
          label='What is the story of your recipe?'
        />
      </InputContainer>
    </FormLine>
  );
};

export default PrefaceInput;
