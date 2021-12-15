import { useDispatch, useSelector } from 'react-redux';

import Form from '../../../ui/form/form';
import FormSection from '../../../ui/form/FormSection';
import CookingTimeInput from './form/CookingTimeInput';
import IngredientInputSection from './form/ingredients/IngredientInputSection';
import NameInput from './form/NameInput';
import PhotoInput from './form/PhotoInput';
import PrefaceInput from './form/PrefaceInput';
import StepsInput from './form/StepsInput';
import TagsInputSection from './form/tags/TagsInputSection';
import { newRecipeFormActions } from '../../../../store/new-recipe-form';
import { newRecipePageActions } from '../../../../store/new-recipe-page';

let ingredientIterator = 0;

const NewRecipeForm = props => {
  const dispatch = useDispatch();
  const enteredNameIsValid = useSelector(state => state.newRecipeForm.enteredNameIsValid);
  const enteredCookingTimeIsValid = useSelector(
    state => state.newRecipeForm.enteredCookingTimeIsValid
  );
  const enteredIngredientAmount = useSelector(state => state.newRecipeForm.enteredIngredientAmount);
  const enteredIngredientFood = useSelector(state => state.newRecipeForm.enteredIngredientFood);
  const enteredIngredientFoodIsValid = useSelector(
    state => state.newRecipeForm.enteredIngredientFoodIsValid
  );
  const enteredIngredientPreparation = useSelector(
    state => state.newRecipeForm.enteredIngredientPreparation
  );
  const ingredientIsOptional = useSelector(state => state.newRecipeForm.ingredientIsOptional);
  const addedIngredients = useSelector(state => state.newRecipeForm.addedIngredients);
  const steps = useSelector(state => state.newRecipeForm.steps);

  const formIsValid = () =>
    enteredNameIsValid &&
    enteredCookingTimeIsValid &&
    (enteredIngredientFoodIsValid || addedIngredients.length) &&
    steps.find(step => step.text.length);

  const addIngredientHandler = () => {
    if (enteredIngredientFoodIsValid) {
      ingredientIterator++;

      const newIngredient = {
        tempId: `Ingredient ${ingredientIterator}`,
        amount: enteredIngredientAmount,
        food: enteredIngredientFood,
        preparation: enteredIngredientPreparation,
        optional: ingredientIsOptional,
      };

      dispatch(newRecipeFormActions.setAddedIngredients(newIngredient));
    }
  };

  const previewHandler = event => {
    event.preventDefault();

    if (formIsValid()) {
      addIngredientHandler();

      dispatch(newRecipeFormActions.resetEnteredIngredient());
      dispatch(newRecipeFormActions.finishEditingSteps());
      dispatch(newRecipePageActions.showPreview());
    }
  };

  return (
    <div className='bg-white rounded-lg'>
      <Form onSubmit={previewHandler}>
        <FormSection>
          <NameInput />
        </FormSection>
        <FormSection>
          <CookingTimeInput />
        </FormSection>
        <FormSection>
          <PhotoInput
            setChosenPhoto={props.setChosenPhoto}
            setChosenPhotoPreviewUrl={props.setChosenPhotoPreviewUrl}
          />
          {/* TODO - Update to use next/image */}
          {props.chosenPhotoPreviewUrl && <img src={props.chosenPhotoPreviewUrl} />}
        </FormSection>
        <h3>Ingredients</h3>
        <FormSection>
          <IngredientInputSection addIngredientHandler={addIngredientHandler} />
        </FormSection>
        <h3>Steps</h3>
        <FormSection>
          <StepsInput />
        </FormSection>
        <h3>Tags</h3>
        <p>Help people find your recipe</p>
        <FormSection>
          <TagsInputSection />
        </FormSection>
        <h3>Preface</h3>
        <FormSection>
          <PrefaceInput />
        </FormSection>
        <button disabled={!formIsValid()}>Preview</button>
      </Form>
    </div>
  );
};

export default NewRecipeForm;
