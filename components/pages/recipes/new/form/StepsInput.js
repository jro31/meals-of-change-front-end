import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../../../ui/form/Input';
import { newRecipeFormActions } from '../../../../../store/new-recipe-form';

const StepsInput = () => {
  const dispatch = useDispatch();
  const steps = useSelector(state => state.newRecipeForm.steps);

  const canAddNewStep = () => steps.at(-1).instructions.trim().length;

  const stepInputChangeHandler = (id, event) => {
    dispatch(newRecipeFormActions.setSteps({ id, instructions: event.target.value }));
  };

  const addNewStepHandler = event => {
    // TODO - This function should also be called when pressing enter while setting a step
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

  const displayStep = step => {
    if (step.isEditing) {
      return (
        <Input
          value={step.instructions}
          onChange={event => stepInputChangeHandler(step.id, event)}
        />
      );
    } else {
      return step.instructions || 'Add instructions';
    }
  };

  return (
    <Fragment>
      {steps.map((step, index) => {
        return (
          <div key={step.id} onClick={() => editStepHandler(step.id)}>
            <h4>Step {index + 1}</h4>
            <div>{displayStep(step)}</div>
          </div>
        );
      })}
      {/* TODO - Pressing enter should also add a new step */}
      <button disabled={!canAddNewStep()} onClick={addNewStepHandler}>
        Add another step
      </button>
      {/* TODO - If finish is clicked and the input is empty, it should be removed */}
      <button onClick={finishEditingHandler}>Finish</button>
    </Fragment>
  );
};

export default StepsInput;
