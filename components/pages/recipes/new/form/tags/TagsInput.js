import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { newRecipeFormActions } from '../../../../../../store/new-recipe-form';
import Tag from '../../../[recipeId]/Tag';

const maxTags = 3;

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

  const examplesText = () => {
    switch (props.type) {
      case 'dish-type':
        return (
          <Fragment>
            <span className='sm:hidden'>e.g. Breakfast,</span>
            <span className='hidden sm:block'>e.g. Starter, Snack, Breakfast</span>
          </Fragment>
        );
      case 'cuisine':
        return (
          <Fragment>
            <span className='sm:hidden'>e.g. Thai,</span>
            <span className='hidden sm:block'>e.g. Thai, Asian, Noodles</span>
          </Fragment>
        );
      case 'other':
        return (
          <Fragment>
            <span className='sm:hidden'>e.g. Gluten-free,</span>
            <span className='hidden sm:block'>e.g. Spicy, Healthy, Gluten-free</span>
          </Fragment>
        );
      default:
        return '';
    }
  };

  const labelText = () => `${humanizeType} tags (${maxTags})`;

  const inputChangeHandler = event => {
    setEnteredInput(event.target.value);
  };

  const inputBlurHandler = () => {
    setInputIsFocussed(false);
    addTag(enteredInput.trim());
  };

  const keyPressHandler = event => {
    const key = event.key;
    const trimmedInput = enteredInput.trim();

    if (key === ',' || key === 'Enter' || key === 'Tab') {
      event.preventDefault();
      addTag(trimmedInput);
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

    if (tags.length >= maxTags) {
      event.preventDefault();
    }
  };

  const addTag = trimmedInput => {
    if (
      trimmedInput.length >= 3 &&
      trimmedInput.length <= 30 &&
      !tags.map(tag => tag.toLowerCase()).includes(trimmedInput.toLowerCase()) &&
      tags.length < maxTags
    ) {
      dispatch(newRecipeFormActions.addTag({ type: camelCaseType, tag: trimmedInput }));
      setEnteredInput('');
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

  return (
    <Fragment>
      <div className='flex sm:hidden'>
        {tags[0] && (
          <div className='flex flex-wrap gap-1 sm:gap-3 mt-2'>
            {tags.map((tag, index) => (
              <Tag key={tag} tagName={tag} onClick={() => deleteTag(index)} />
            ))}
          </div>
        )}
      </div>
      <div className='relative'>
        <div className='absolute -top-6 right-0'>{examplesText()}</div>
        <div
          className={`flex items-center border rounded-lg mt-6 min-h-[40px] ${
            tags.length >= maxTags ? 'sm:py-1' : ''
          } ${inputIsFocussed ? 'bg-slate-200 border-slate-400' : 'bg-slate-100 border-slate-300'}`}
        >
          {tags.map((tag, index) => (
            <div
              key={tag}
              className='hidden sm:flex items-center bg-slate-800 rounded-lg ml-1.5 px-2 py-1.5'
            >
              <div>{tag}</div>
              <div className='cursor-pointer ml-2.5 font-bold' onClick={() => deleteTag(index)}>
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
            onBlur={inputBlurHandler}
            id={`${props.type}-tags`}
            placeholder={labelText()}
            className={`${tags.length >= maxTags ? 'sm:hidden' : ''} ${
              tags.length ? 'basis-full sm:basis-auto' : 'basis-full'
            } border-0 text-slate-400 peer border-slate-300 bg-slate-100 p-1.5 sm:p-2 text-lg rounded-lg focus:outline-none placeholder-transparent focus:ring-0 focus:border-slate-400 focus:bg-slate-200`}
            maxLength={30}
          />
          <label
            htmlFor={`${props.type}-tags`}
            className={`absolute transition-all left-0 -top-6 text-slate-200 text-base peer-focus:left-0 peer-focus:-top-6 peer-focus:sm:-top-6 peer-focus:text-slate-200 peer-focus:text-base ${
              tags.length
                ? ''
                : 'peer-placeholder-shown:text-lg peer-placeholder-shown:text-slate-300 peer-placeholder-shown:left-2.5 peer-placeholder-shown:top-2 peer-placeholder-shown:sm:top-2.5'
            }`}
          >
            {labelText()}
          </label>
        </div>
      </div>
    </Fragment>
  );
};

export default TagsInput;
