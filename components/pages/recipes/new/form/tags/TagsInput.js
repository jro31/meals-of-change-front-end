import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { newRecipeFormActions } from '../../../../../../store/new-recipe-form';
import Flexbox from '../../../../../styles/Flexbox';
import Input from '../../../../../ui/form/Input';
import InputContainer from '../../../../../ui/form/InputContainer';
import classes from './TagsInput.module.css';

const TagsInput = props => {
  const dispatch = useDispatch();
  const [enteredInput, setEnteredInput] = useState('');
  const [backspaceIsPressed, setBackspaceIsPressed] = useState(false);

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
      if (!enteredInput.trim().length) {
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

  return (
    <Fragment>
      <InputContainer>
        <label htmlFor={`${props.type}-tags`}>{humanizeType} tags - add up to 5</label>
        <Flexbox alignCenter className={classes['tags-input-container']}>
          {tags.map((tag, index) => (
            <Flexbox alignCenter key={tag} className={classes.tag}>
              <div>{tag}</div>
              <div className={classes['delete-tag-cross']} onClick={() => deleteTag(index)}>
                x
              </div>
            </Flexbox>
          ))}
          <Input
            value={enteredInput}
            onChange={inputChangeHandler}
            onKeyDown={keyPressHandler}
            onKeyUp={keyReleaseHandler}
            id={`${props.type}-tags`}
            placeholder={tags.length ? '' : placeholder()}
            className={classes['tags-input']}
          />
        </Flexbox>
      </InputContainer>
    </Fragment>
  );
};

export default TagsInput;
