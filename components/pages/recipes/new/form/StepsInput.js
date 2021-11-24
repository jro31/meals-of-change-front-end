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

  const editStep = id => {
    dispatch(newRecipeFormActions.editStep(id));
  };

  const displayStep = step => {
    if (step.isEditing) {
      return <Input value={step.text} onChange={stepInputChangeHandler.bind(null, step.id)} />;
    } else {
      return <div onClick={editStep.bind(null, step.id)}>{step.text}</div>;
    }
  };

  return (
    <Fragment>
      {steps.map(step => {
        return <div key={step.id}>{displayStep(step)}</div>;
      })}
      <button onClick={addNewStepHandler}>Add another step</button>
    </Fragment>
  );
};

export default StepsInput;
