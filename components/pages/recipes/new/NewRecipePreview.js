import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import usePhotoUploader from '../../../../hooks/use-photo-uploader';
import useTagsParser from '../../../../hooks/use-tags-parser';
import { newRecipeFormActions } from '../../../../store/new-recipe-form';
import { newRecipePageActions } from '../../../../store/new-recipe-page';
import { registrationModalActions } from '../../../../store/registration-modal';
import Button from '../../../ui/Button';
import RecipeDisplay from '../[recipeId]/RecipeDisplay';
import TextFreeLogo from '../../../ui/TextFreeLogo';

const NewRecipePreview = props => {
  const router = useRouter();
  const dispatch = useDispatch();
  const enteredName = useSelector(state => state.newRecipeForm.enteredName);
  const enteredCookingTime = useSelector(state => state.newRecipeForm.enteredCookingTime);
  const enteredPreface = useSelector(state => state.newRecipeForm.enteredPreface);
  const addedIngredients = useSelector(state => state.newRecipeForm.addedIngredients);
  const steps = useSelector(state => state.newRecipeForm.steps);
  const tagsObject = useSelector(state => state.newRecipeForm.tags);
  const isLoggedIn = useSelector(state => state.loginStatus.loggedInStatus === 'LOGGED_IN');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const tagsParser = useTagsParser();

  const photoUploader = usePhotoUploader();

  const editRecipeHandler = () => {
    dispatch(newRecipePageActions.showForm());
  };

  const stepsAttributes = () => {
    return steps
      .filter(step => step.instructions.trim().length)
      .map((step, index) => {
        return { position: index + 1, instructions: step.instructions.trim() };
      });
  };

  const submitHandler = async () => {
    setErrorMessage('');

    if (isLoggedIn) {
      setIsSubmitting(true);
      try {
        const blobSignedIdArray = await photoUploader(props.chosenPhoto);

        if (props.chosen_photo && blobSignedIdArray.length !== 2) {
          throw new Error('Unable to save photo');
        }

        const recipeOptions = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            recipe: {
              name: enteredName.trim(),
              time_minutes: enteredCookingTime,
              preface: enteredPreface.trim(),
              ingredients_attributes: addedIngredients,
              steps_attributes: stepsAttributes(),
              tags: tagsParser(tagsObject),
              small_photo_blob_signed_id: blobSignedIdArray[0],
              large_photo_blob_signed_id: blobSignedIdArray[1],
            },
          }),
          credentials: 'include',
        };

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/recipes`,
          recipeOptions
        );

        if (!response.status === 201) {
          throw new Error('Recipe not created');
        }

        const data = await response.json();

        await router.replace(`/recipes/${data.recipe.id}`).then(() => {
          dispatch(newRecipeFormActions.resetForm());
          props.setChosenPhoto(null);
          props.setChosenPhotoPreviewUrl('');
          dispatch(newRecipePageActions.showForm());
          setIsSubmitting(false);
        });
      } catch (error) {
        setErrorMessage(`Recipe not saved - ${error || 'please try again'}`);
        setIsSubmitting(false);
      }
    } else {
      dispatch(registrationModalActions.setModalTitle('You must be logged-in to add a recipe'));
      dispatch(registrationModalActions.openModal());
    }
  };

  return (
    <Fragment>
      <RecipeDisplay
        photo={props.chosenPhotoPreviewUrl}
        name={enteredName}
        preface={enteredPreface}
        tags={tagsParser(tagsObject)}
        ingredients={addedIngredients}
        cookingTime={enteredCookingTime}
        steps={steps}
        isPreview={true}
      />
      <div className='flex justify-center items-center fixed bottom-0 w-screen bg-slate-500 h-14 sm:h-16'>
        <div className='flex justify-between items-center basis-full xl:basis-11/12 2xl:basis-4/5 px-2 sm:px-4'>
          <div className='flex flex-col justify-between max-h-14 sm:max-h-none overflow-scroll'>
            {errorMessage && <div className='sm:hidden text-xs text-rose-300'>{errorMessage}</div>}
            <div onClick={editRecipeHandler} className='cursor-pointer'>
              ← Go back
            </div>
          </div>
          <div className='flex items-center gap-3'>
            {errorMessage && (
              <div className='hidden sm:block text-sm lg:text-base text-rose-300'>
                {errorMessage}
              </div>
            )}
            <Button
              className='min-w-[117px] sm:min-w-[125px]'
              theme='plain'
              disabled={isSubmitting}
              onClick={submitHandler}
            >
              {isSubmitting ? (
                <div className='flex justify-center'>
                  <TextFreeLogo className='animate-spin' size='30' />
                </div>
              ) : (
                'Submit recipe'
              )}
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NewRecipePreview;
