import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../../../ui/form/Input';
import { newRecipeFormActions } from '../../../../../store/new-recipe-form';
import FormLine from '../../../../ui/form/FormLine';

const StepsInput = () => {
  const dispatch = useDispatch();
  const steps = useSelector(state => state.newRecipeForm.steps);

  const canAddNewStep = () => steps.at(-1).text.trim().length;

  const stepInputChangeHandler = (id, event) => {
    dispatch(newRecipeFormActions.setSteps({ id, text: event.target.value }));
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

  const displayStep = step => {
    if (step.isEditing) {
      return (
        <FormLine>
          <Input value={step.text} onChange={event => stepInputChangeHandler(step.id, event)} />
        </FormLine>
      );
    } else {
      return <FormLine>{step.text || 'Add instructions'}</FormLine>;
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
      <button disabled={!canAddNewStep()} onClick={addNewStepHandler}>
        Add another step
      </button>
      <button onClick={finishEditingHandler}>Finish</button>
    </Fragment>
  );
};

export default StepsInput;
