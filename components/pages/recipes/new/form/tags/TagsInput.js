import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { newRecipeFormActions } from '../../../../../../store/new-recipe-form';
import classes from './TagsInput.module.css';

const TagsInput = props => {
  const dispatch = useDispatch();
  const [enteredInput, setEnteredInput] = useState('');

  const camelCaseType = props.type
    .split('-')
    .map((word, index) => (index === 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join('');

  const allTags = useSelector(state => state.newRecipeForm.tags);
  const tags = useSelector(state => state.newRecipeForm.tags[camelCaseType]);

  const inputChangeHandler = event => {
    setEnteredInput(event.target.value);
  };

  const keyPressHandler = event => {
    const key = event.key;
    const trimmedInput = enteredInput.trim();

    if (key === ',' || key === 'Enter') {
      event.preventDefault();
      if (trimmedInput.length && !tags.includes(trimmedInput)) {
        dispatch(newRecipeFormActions.addTag({ type: camelCaseType, tag: trimmedInput }));
        setEnteredInput('');
      }
    }

    if (key === 'Backspace' && !enteredInput.trim().length) {
      event.preventDefault();
      if (enteredInput.length) {
        setEnteredInput('');
      } else if (tags.length) {
        dispatch(newRecipeFormActions.removeLastTag(camelCaseType));
      }
    }
  };

  // console.log(allTags);
  // console.log(tags);

  return (
    <div className={classes['input-container']}>
      {tags.map(tag => (
        <div key={tag}>{tag}</div>
      ))}
      <input value={enteredInput} onChange={inputChangeHandler} onKeyDown={keyPressHandler} />
    </div>
  );
};

export default TagsInput;
