import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import useChecksum from '../../../../hooks/use-checksum';
import usePresignedUrl from '../../../../hooks/use-presigned-url';
import useResizeImage from '../../../../hooks/use-resize-image';
import { newRecipeFormActions } from '../../../../store/new-recipe-form';
import { newRecipePageActions } from '../../../../store/new-recipe-page';
import Button from '../../../ui/Button';

const NewRecipePreview = props => {
  const router = useRouter();
  const dispatch = useDispatch();
  const enteredName = useSelector(state => state.newRecipeForm.enteredName);
  const enteredCookingTime = useSelector(state => state.newRecipeForm.enteredCookingTime);
  const enteredPreface = useSelector(state => state.newRecipeForm.enteredPreface);
  const addedIngredients = useSelector(state => state.newRecipeForm.addedIngredients);
  const steps = useSelector(state => state.newRecipeForm.steps);
  const tagsObject = useSelector(state => state.newRecipeForm.tags);

  const calculateChecksum = useChecksum();
  const getPresignedUrl = usePresignedUrl();
  const resizeImage = useResizeImage();

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

  const submitHandler = async () => {
    // TODO - Add an 'isSubmitting' state and display that somehow
    try {
      let thumbnailPresignedUrl = null;

      if (props.chosenPhoto) {
        // TODO - Add check that 'chosenPhoto' is a photo - If not throw an error

        const [thumbnailPhoto, smallPhoto, largePhoto, fullSizePhoto] = await resizeImage(
          props.chosenPhoto
        );

        const thumbnailChecksum = await calculateChecksum(thumbnailPhoto);
        thumbnailPresignedUrl = await getPresignedUrl(
          thumbnailPhoto,
          thumbnailPhoto.size,
          thumbnailChecksum,
          'thumbnail'
        );

        const s3Options = {
          method: 'PUT',
          headers: thumbnailPresignedUrl.direct_upload.headers,
          body: thumbnailPhoto,
        };
        const s3Response = await fetch(thumbnailPresignedUrl.direct_upload.url, s3Options);
        if (!s3Response.ok) {
          // TODO - Throw error
        }
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
            thumbnail_photo_blob_signed_id: thumbnailPresignedUrl
              ? thumbnailPresignedUrl.blob_signed_id
              : '',
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

      dispatch(newRecipeFormActions.resetForm());
      props.setChosenPhoto(null);
      props.setChosenPhotoPreviewUrl('');

      router.replace(`/recipes/${data.recipe.id}`);
      dispatch(newRecipePageActions.showForm());
    } catch (error) {
      // TODO - Display error to user
      dispatch(newRecipePageActions.showForm());
    }
  };

  return (
    <Fragment>
      <h1>{enteredName}</h1>
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
      <Button onClick={submitHandler}>Submit recipe</Button>
    </Fragment>
  );
};

export default NewRecipePreview;
