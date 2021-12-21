import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import usePhotoUploader from '../../../../hooks/use-photo-uploader';
import { newRecipeFormActions } from '../../../../store/new-recipe-form';
import { newRecipePageActions } from '../../../../store/new-recipe-page';
import Button from '../../../ui/Button';
import Title from '../../../ui/text/Title';

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

  const photoUploader = usePhotoUploader();

  const editRecipeHandler = () => {
    dispatch(newRecipePageActions.showForm());
  };

  const stepsAttributes = () => {
    return steps
      .filter(step => step.text.trim().length)
      .map((step, index) => {
        return { position: index + 1, instructions: step.text.trim() };
      });
  };

  const tagsArray = () => [...new Set(Object.values(tagsObject).flat())];

  // TODO - Handle 'isSubmitting' being true
  const submitHandler = async () => {
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
            tags: tagsArray(),
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
      <Title>{enteredName}</Title>
      <p>Time: {enteredCookingTime}</p>
      <p>Preface: {enteredPreface}</p>
      <p>
        Photo:
        <img src={props.chosenPhotoPreviewUrl} /> {/* TODO - Update to use 'image' */}
      </p>
      <p>Ingredients: [INGREDIENTS HERE]</p>
      <p>Steps: [STEPS HERE]</p>
      <p>Tags: [TAGS HERE]</p>
      <Button onClick={editRecipeHandler}>Edit recipe</Button>
      <Button disabled={isSubmitting} onClick={submitHandler}>
        Submit recipe
      </Button>
    </Fragment>
  );
};

export default NewRecipePreview;
