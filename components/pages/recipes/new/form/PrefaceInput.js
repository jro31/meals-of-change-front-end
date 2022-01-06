import { useSelector } from 'react-redux';

import useInput from '../../../../../hooks/use-input';
import { newRecipeFormActions } from '../../../../../store/new-recipe-form';

const PrefaceInput = () => {
  const enteredPreface = useSelector(state => state.newRecipeForm.enteredPreface);

  const { valueChangeHandler } = useInput(newRecipeFormActions.setEnteredPreface);

  // TODO - Add a limit of 1000(?) characters to this input (it should match the validation on the backend)
  return (
    <div className='relative'>
      <div className='flex flex-col mt-7'>
        <textarea
          id='preface'
          value={enteredPreface}
          onChange={valueChangeHandler}
          className='peer text-slate-400 border border-slate-300 bg-slate-100 p-1.5 sm:p-2 text-lg rounded-lg focus:outline-none placeholder-transparent focus:ring-0 focus:border-slate-400 focus:bg-slate-200'
          placeholder='What is the story of your recipe?'
        />
        <label
          htmlFor='preface'
          className='absolute transition-all left-0 -top-6 text-slate-200 text-base peer-placeholder-shown:text-lg peer-placeholder-shown:text-slate-300 peer-placeholder-shown:left-2.5 peer-placeholder-shown:top-1 peer-focus:left-0 peer-focus:-top-6 peer-focus:text-slate-200 peer-focus:text-base'
        >
          What is the story of your recipe?
        </label>
      </div>
    </div>
  );
};

export default PrefaceInput;
