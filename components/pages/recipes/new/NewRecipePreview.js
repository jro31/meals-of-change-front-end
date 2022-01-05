import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import usePhotoUploader from '../../../../hooks/use-photo-uploader';
import useTagsParser from '../../../../hooks/use-tags-parser';
import { newRecipeFormActions } from '../../../../store/new-recipe-form';
import { newRecipePageActions } from '../../../../store/new-recipe-page';
import Button from '../../../ui/Button';
import RecipeDisplay from '../[recipeId]/RecipeDisplay';

const NewRecipePreview = props => {
  const router = useRouter();
  const dispatch = useDispatch();
  const enteredName = useSelector(state => state.newRecipeForm.enteredName);
  const enteredCookingTime = useSelector(state => state.newRecipeForm.enteredCookingTime);
  const enteredPreface = useSelector(state => state.newRecipeForm.enteredPreface);
  const addedIngredients = useSelector(state => state.newRecipeForm.addedIngredients);
  const steps = useSelector(state => state.newRecipeForm.steps);
  const tagsObject = useSelector(state => state.newRecipeForm.tags);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  // TODO - Handle 'isSubmitting' being true
  const submitHandler = async () => {
    // TODO - Add check that user is logged-in. If they're not, display login modal

    setIsSubmitting(true);
    try {
      const blobSignedIdArray = await photoUploader(props.chosenPhoto);

      if (props.chosen_photo && blobSignedIdArray.length !== 4) {
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
            thumbnail_photo_blob_signed_id: blobSignedIdArray[0],
            small_photo_blob_signed_id: blobSignedIdArray[1],
            large_photo_blob_signed_id: blobSignedIdArray[2],
            full_size_photo_blob_signed_id: blobSignedIdArray[3],
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

      router.replace(`/recipes/${data.recipe.id}`);

      // TODO - This stuff shouldn't happen until the recipe is created
      dispatch(newRecipeFormActions.resetForm());
      props.setChosenPhoto(null);
      props.setChosenPhotoPreviewUrl('');
      dispatch(newRecipePageActions.showForm());
      setIsSubmitting(false);
    } catch (error) {
      // TODO - Display error to user
      console.log('💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀');
      console.log(error);
      dispatch(newRecipePageActions.showForm());
      setIsSubmitting(false);
    }
  };

  return (
    <Fragment>
      <RecipeDisplay
        photo={props.chosenPhotoPreviewUrl}
        name={enteredName}
        preface={enteredPreface}
        tags={tagsParser(tagsObject).map(tag => ({ name: tag }))} // TODO - Simplify this if possible - currently changing too many times
        ingredients={addedIngredients}
        cookingTime={enteredCookingTime}
        steps={steps}
        isPreview={true}
      />
      <div className='flex justify-center items-center fixed bottom-0 w-screen bg-slate-500 h-14 sm:h-16'>
        <div className='flex justify-between items-center basis-full xl:basis-11/12 2xl:basis-4/5 h-3/4 px-2 sm:px-4'>
          <div onClick={editRecipeHandler} className='cursor-pointer'>
            ← Go back
          </div>
          <Button disabled={isSubmitting} onClick={submitHandler}>
            Submit recipe
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default NewRecipePreview;
