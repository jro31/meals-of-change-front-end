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
import Button from '../../../ui/Button';
import Subheading from '../../../ui/text/Subheading';

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
        amount: enteredIngredientAmount.trim(),
        food: enteredIngredientFood.trim(),
        preparation: enteredIngredientPreparation.trim(),
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
      <Subheading>Ingredients</Subheading>
      <FormSection>
        <IngredientInputSection addIngredientHandler={addIngredientHandler} />
      </FormSection>
      <Subheading>Steps</Subheading>
      <FormSection>
        <StepsInput />
      </FormSection>
      <Subheading>Tags</Subheading>
      <p>Help people find your recipe</p>
      <FormSection>
        <TagsInputSection />
      </FormSection>
      <Subheading>Preface</Subheading>
      <FormSection>
        <PrefaceInput />
      </FormSection>
      {/* TODO - Add checkbox that says something like 'This recipe contains no animal products', and add the checkbox state to the formIsValid() function */}
      <Button disabled={!formIsValid()}>Preview</Button>
    </Form>
  );
};

export default NewRecipeForm;
