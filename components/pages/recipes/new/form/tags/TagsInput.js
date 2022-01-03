import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { newRecipeFormActions } from '../../../../../../store/new-recipe-form';

const TagsInput = props => {
  const dispatch = useDispatch();
  const [enteredInput, setEnteredInput] = useState('');
  const [backspaceIsPressed, setBackspaceIsPressed] = useState(false);
  const [inputIsFocussed, setInputIsFocussed] = useState(false);

  const camelCaseType = props.type
    .split('-')
    .map((word, index) => (index === 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join('');
  const humanizeType = props.type
    .split('-')
    .map((word, index) => (index === 0 ? word[0].toUpperCase() + word.slice(1) : word))
    .join(' ');

  const tags = useSelector(state => state.newRecipeForm.tags[camelCaseType]);

  const placeholder = () => {
    switch (props.type) {
      case 'dish-type':
        return 'Starter, Snack, Breakfast';
      case 'cuisine':
        return 'Thai, Asian, Noodles';
      case 'other':
        return 'Spicy, Healthy, Gluten-free';
      default:
        return '';
    }
  };

  const inputChangeHandler = event => {
    setEnteredInput(event.target.value);
  };

  const keyPressHandler = event => {
    const key = event.key;
    const trimmedInput = enteredInput.trim();

    if (key === ',' || key === 'Enter') {
      // TODO - Update this to also accept 'tab', and also 'onBlur' of the input
      event.preventDefault();
      if (
        trimmedInput.length &&
        !tags.map(tag => tag.toLowerCase()).includes(trimmedInput.toLowerCase()) &&
        tags.length < 5
      ) {
        dispatch(newRecipeFormActions.addTag({ type: camelCaseType, tag: trimmedInput }));
        setEnteredInput('');
      }
      return;
    }

    if (key === 'Backspace') {
      if (!trimmedInput.length) {
        event.preventDefault();
        if (enteredInput.length) {
          setEnteredInput('');
        } else if (tags.length && !backspaceIsPressed) {
          dispatch(newRecipeFormActions.removeLastTag(camelCaseType));
        }
      }
      setBackspaceIsPressed(true);
      return;
    }

    if (tags.length >= 5) {
      event.preventDefault();
    }
  };

  const keyReleaseHandler = event => {
    if (event.key === 'Backspace') {
      setBackspaceIsPressed(false);
    }
  };

  const deleteTag = index => {
    dispatch(newRecipeFormActions.removeTagAtIndex({ type: camelCaseType, index: index }));
  };

  // TODO - Add a max-length to tags (and match this with a validation on the backend)
  return (
    <div className='relative'>
      <div
        className={`flex items-center border rounded-lg mt-6 ${
          inputIsFocussed ? 'bg-slate-200 border-slate-400' : 'bg-slate-100 border-slate-300'
        }`}
      >
        {tags.map((tag, index) => (
          <div
            key={tag}
            className='flex items-center flex-initial bg-slate-800 rounded-lg mx-1.5 px-2 py-1.5'
          >
            <div>{tag}</div>
            <div className='cursor-pointer ml-2.5' onClick={() => deleteTag(index)}>
              x
            </div>
          </div>
        ))}
        <input
          type='text'
          value={enteredInput}
          onChange={inputChangeHandler}
          onKeyDown={keyPressHandler}
          onKeyUp={keyReleaseHandler}
          onFocus={() => setInputIsFocussed(true)}
          onBlur={() => setInputIsFocussed(false)}
          id={`${props.type}-tags`}
          placeholder={`${humanizeType} tags - add up to 5`}
          className='border-0 flex-grow-only text-slate-400 peer border-slate-300 bg-slate-100 p-2 text-lg rounded-lg focus:outline-none placeholder-transparent focus:ring-0 focus:border-slate-400 focus:bg-slate-200'
        />
        <label
          htmlFor={`${props.type}-tags`}
          className={`absolute transition-all left-2.5 -top-6 text-slate-200 text-base peer-focus:-top-6 peer-focus:text-slate-200 peer-focus:text-base ${
            tags.length
              ? ''
              : 'peer-placeholder-shown:text-lg peer-placeholder-shown:text-slate-300 peer-placeholder-shown:top-2.5'
          }`}
        >
          {humanizeType} tags - add up to 5
        </label>
      </div>
    </div>
  );
};

export default TagsInput;
