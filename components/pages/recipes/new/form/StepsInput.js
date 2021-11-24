import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../../../ui/form/Input';
import { newRecipeFormActions } from '../../../../../store/new-recipe-form';

const StepsInput = () => {
  const dispatch = useDispatch();
  const steps = useSelector(state => state.newRecipeForm.steps);

  const stepInputChangeHandler = (id, event) => {
    dispatch(newRecipeFormActions.setSteps({ id, text: event.target.value }));
  };

  const addNewStepHandler = event => {
    event.preventDefault();

    dispatch(newRecipeFormActions.addNewStep());
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
        <Fragment>
          <Input value={step.text} onChange={stepInputChangeHandler.bind(null, step.id)} />
        </Fragment>
      );
    } else {
      return <div>{step.text || '🤷‍♂️'}</div>;
    }
  };

  return (
    <Fragment>
      {steps.map((step, index) => {
        return (
          <div key={step.id} onClick={editStepHandler.bind(null, step.id)}>
            <h4>Step {index + 1}</h4>
            <div>{displayStep(step)}</div>
          </div>
        );
      })}
      <button onClick={addNewStepHandler}>Add another step</button>
      <button onClick={finishEditingHandler}>Finish</button>
    </Fragment>
  );
};

export default StepsInput;
