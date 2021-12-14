import { useState } from 'react';
import { useSelector } from 'react-redux';

import useChecksum from '../../../../hooks/use-checksum';
import Form from '../../../ui/form/form';
import FormSection from '../../../ui/form/FormSection';
import CookingTimeInput from './form/CookingTimeInput';
import IngredientInputSection from './form/ingredients/IngredientInputSection';
import NameInput from './form/NameInput';
import PhotoInput from './form/PhotoInput';
import PrefaceInput from './form/PrefaceInput';
import StepsInput from './form/StepsInput';
import TagsInputSection from './form/tags/TagsInputSection';

const createPresignedUrl = async (file, byte_size, checksum) => {
  let options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      file: {
        filename: file.name,
        byte_size: byte_size,
        checksum: checksum,
        content_type: file.type,
        metadata: {
          message: 'resume for parsing',
        },
      },
    }),
    credentials: 'include',
  };
  let res = await fetch('http://localhost:3001/api/v1/presigned_url', options);
  if (res.status !== 200) return res;
  return await res.json();
};

const NewRecipeForm = () => {
  const enteredName = useSelector(state => state.newRecipeForm.enteredName);
  const enteredCookingTime = useSelector(state => state.newRecipeForm.enteredCookingTime);
  const enteredPreface = useSelector(state => state.newRecipeForm.enteredPreface);
  const addedIngredients = useSelector(state => state.newRecipeForm.addedIngredients);
  const steps = useSelector(state => state.newRecipeForm.steps);

  const [chosenPhoto, setChosenPhoto] = useState();
  const calculateChecksum = useChecksum();

  const submitHandler = async event => {
    event.preventDefault();
    // Remember to '.trim()' inputs
    // Check inputs are valid
    // With tags, remember to remove tags duplicated over the three inputs
    // Take to preview page

    // If approved, sumbit to backend
    let presignedUrl = null;

    if (chosenPhoto) {
      const checksum = await calculateChecksum(chosenPhoto);
      presignedUrl = await createPresignedUrl(chosenPhoto, chosenPhoto.size, checksum);

      const s3Options = {
        method: 'PUT',
        headers: presignedUrl.direct_upload.headers,
        body: chosenPhoto,
      };
      const s3Response = await fetch(presignedUrl.direct_upload.url, s3Options);
      console.log('🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕');
      console.log(s3Response);
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
          name: enteredName,
          time_minutes: enteredCookingTime,
          preface: enteredPreface,
          ingredients_attributes: addedIngredients,
          steps_attributes: [
            // TODO - Update this
            {
              position: 1,
              instructions: 'My first step',
            },
          ],
          tags: ['test-tag'], // TODO - Compress the 'tags' state into one array
          photo_blob_signed_id: presignedUrl ? presignedUrl.blob_signed_id : '',
        },
      }),
      credentials: 'include',
    };
    const response = await fetch('http://localhost:3001/api/v1/recipes', recipeOptions);
    console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀');
    console.log(response);

    if (!response.ok) {
      // TODO- Handle error
    }
  };

  return (
    <div className='bg-white rounded-lg'>
      <Form onSubmit={submitHandler}>
        <FormSection>
          <NameInput />
        </FormSection>
        <FormSection>
          <CookingTimeInput />
        </FormSection>
        <FormSection>
          <PhotoInput setChosenPhoto={setChosenPhoto} />
        </FormSection>
        <h3>Ingredients</h3>
        <FormSection>
          <IngredientInputSection />
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
        <button>Preview</button>
      </Form>
    </div>
  );
};

export default NewRecipeForm;
