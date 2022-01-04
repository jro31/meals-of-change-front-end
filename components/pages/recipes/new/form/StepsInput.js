import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { newRecipeFormActions } from '../../../../../store/new-recipe-form';
import Button from '../../../../ui/Button';

const StepsInput = () => {
  const dispatch = useDispatch();
  const steps = useSelector(state => state.newRecipeForm.steps);

  const canAddNewStep = () => steps.at(-1).instructions.trim().length;

  const stepInputChangeHandler = (id, event) => {
    dispatch(newRecipeFormActions.setSteps({ id, instructions: event.target.value }));
  };

  const addNewStepHandler = event => {
    event.preventDefault();

    if (canAddNewStep()) {
      dispatch(newRecipeFormActions.addNewStep());
    }
  };

  const editStepHandler = id => {
    if (steps.find(step => step.id === id).isEditing === false) {
      dispatch(newRecipeFormActions.editStep(id));
    }
  };

  const finishEditingHandler = event => {
    event.preventDefault();

    dispatch(newRecipeFormActions.finishEditingSteps());
  };

  const keyPressHandler = event => {
    const key = event.key;

    if (key === 'Enter') {
      event.preventDefault();
      dispatch(newRecipeFormActions.finishEditingSteps());
    }
  };

  const displayStep = step => {
    if (step.isEditing) {
      return (
        <div>
          <textarea
            value={step.instructions}
            onChange={event => stepInputChangeHandler(step.id, event)}
            onKeyDown={keyPressHandler}
            className='w-full text-slate-400 border border-slate-300 bg-slate-100 p-2 text-lg rounded-lg focus:ring-0 focus:border-slate-400 focus:bg-slate-200'
          />
        </div>
      );
    } else {
      return (
        <div
          className={`bg-slate-500 px-3 py-2 rounded-xl ${
            step.instructions ? '' : 'text-slate-400'
          }`}
        >
          {step.instructions || 'Add instructions'}
        </div>
      );
    }
  };

  return (
    <Fragment>
      {steps.map((step, index) => {
        return (
          <div
            key={step.id}
            onClick={() => editStepHandler(step.id)}
            className={step.isEditing ? '' : 'cursor-pointer'}
          >
            <h4 className='mb-1'>
              Step {index + 1}
              {index === 0 && '*'}
            </h4>
            {displayStep(step)}
          </div>
        );
      })}
      <div className='flex justify-end gap-1 mt-2'>
        <Button theme='cancel' size='small' disabled={!canAddNewStep()} onClick={addNewStepHandler}>
          Add another step
        </Button>
        <Button theme='cancel' size='small' onClick={finishEditingHandler}>
          Finish
        </Button>
      </div>
    </Fragment>
  );
};

export default StepsInput;
