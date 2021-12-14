import { useState } from 'react';
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
        content_type: 'application/pdf',
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
  const [chosenPhoto, setChosenPhoto] = useState();
  const calculateChecksum = useChecksum();

  const submitHandler = async event => {
    event.preventDefault();
    // Remember to '.trim()' inputs
    // Check inputs are valid
    // With tags, remember to remove tags duplicated over the three inputs
    // Take to preview page

    // If approved, sumbit to backend

    if (chosenPhoto) {
      const checksum = await calculateChecksum(chosenPhoto);
      const presignedUrl = await createPresignedUrl(chosenPhoto, chosenPhoto.size, checksum);
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
