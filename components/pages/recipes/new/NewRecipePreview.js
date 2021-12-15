import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useChecksum from '../../../../hooks/use-checksum';
import usePresignedUrl from '../../../../hooks/use-presigned-url';
import { newRecipePageActions } from '../../../../store/new-recipe-page';

const NewRecipePreview = props => {
  const dispatch = useDispatch();
  const enteredName = useSelector(state => state.newRecipeForm.enteredName);
  const enteredCookingTime = useSelector(state => state.newRecipeForm.enteredCookingTime);
  const enteredPreface = useSelector(state => state.newRecipeForm.enteredPreface);
  const addedIngredients = useSelector(state => state.newRecipeForm.addedIngredients);
  const steps = useSelector(state => state.newRecipeForm.steps);
  const tagsObject = useSelector(state => state.newRecipeForm.tags);

  const calculateChecksum = useChecksum();
  const getPresignedUrl = usePresignedUrl();

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
    let presignedUrl = null;

    if (props.chosenPhoto) {
      const checksum = await calculateChecksum(props.chosenPhoto);
      presignedUrl = await getPresignedUrl(props.chosenPhoto, props.chosenPhoto.size, checksum);

      const s3Options = {
        method: 'PUT',
        headers: presignedUrl.direct_upload.headers,
        body: props.chosenPhoto,
      };
      const s3Response = await fetch(presignedUrl.direct_upload.url, s3Options);
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
          photo_blob_signed_id: presignedUrl ? presignedUrl.blob_signed_id : '',
        },
      }),
      credentials: 'include',
    };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/recipes`,
      recipeOptions
    );

    if (!response.ok) {
      // TODO- Handle error
    }

    // TODO - Redirect to the recipe

    // TODO - Add warning that recipe cannot be changed once submitted
    // TODO - Clear the form (at the end of this function)
  };

  return (
    <Fragment>
      <h1>{enteredName}</h1>
      <p>Time: {enteredCookingTime}</p>
      <p>Preface: {enteredPreface}</p>
      <p>Ingredients: [INGREDIENTS HERE]</p>
      <p>Steps: [STEPS HERE]</p>
      <p>Tags: [TAGS HERE]</p>
      <button onClick={editRecipeHandler}>Edit recipe</button>
      <button onClick={submitHandler}>Submit recipe</button>;
    </Fragment>
  );
};

export default NewRecipePreview;
