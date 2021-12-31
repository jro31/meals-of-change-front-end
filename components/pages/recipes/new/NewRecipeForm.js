import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

import Form from '../../../ui/form/form';
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
import Title from '../../../ui/text/Title';
import Subheading from '../../../ui/text/Subheading';

let ingredientIterator = 0;

const NewRecipeForm = props => {
  const dispatch = useDispatch();
  const enteredName = useSelector(state => state.newRecipeForm.enteredName);
  const enteredNameIsValid = useSelector(state => state.newRecipeForm.enteredNameIsValid);
  const enteredPreface = useSelector(state => state.newRecipeForm.enteredPreface);
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

  console.log(props.chosenPhotoPreviewUrl);

  return (
    <Fragment>
      <div className='flex justify-between gap-4'>
        <div className='basis-1/2 overflow-scroll h-screen-minus-nav'>
          <Title>Add your recipe</Title>
          <Form onSubmit={previewHandler}>
            <div className='mt-4 mb-10'>
              <Subheading>Choose a photo</Subheading>
              <PhotoInput
                setChosenPhoto={props.setChosenPhoto}
                setChosenPhotoPreviewUrl={props.setChosenPhotoPreviewUrl}
              />
            </div>

            <div className='mb-10'>
              <Subheading className=''>Recipe details</Subheading>
              <NameInput className='' />
              <PrefaceInput />
              <div className='flex'>
                <CookingTimeInput className='basis-1/2' />
              </div>
            </div>
            <Subheading>Ingredients</Subheading>
            <IngredientInputSection addIngredientHandler={addIngredientHandler} />
            <Subheading>Steps</Subheading>
            <StepsInput />
            <Subheading>Tags</Subheading>
            <TagsInputSection />
            {/* TODO - Add checkbox that says something like 'This recipe contains no animal products', and add the checkbox state to the formIsValid() function */}
            <Button disabled={!formIsValid()}>Preview</Button>
          </Form>
        </div>
        <div className='basis-1/2 border border-slate-300 rounded-2xl p-4 overflow-scroll h-screen-minus-nav'>
          {props.chosenPhotoPreviewUrl && (
            <div className='flex justify-center w-full h-1/3'>
              <div className='relative h-full basis-1/2'>
                <Image
                  src={props.chosenPhotoPreviewUrl}
                  alt='Preview photo'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='50% 50%'
                  className='rounded-t-2xl'
                />
              </div>
            </div>
          )}
          <Title>{enteredName}</Title>
          <Subheading>{enteredPreface}</Subheading>
        </div>
      </div>
    </Fragment>
  );
};

export default NewRecipeForm;
