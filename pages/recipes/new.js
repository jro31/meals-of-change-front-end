import { useState } from 'react';
import { useSelector } from 'react-redux';

import NewRecipeForm from '../../components/pages/recipes/new/NewRecipeForm';
import NewRecipePreview from '../../components/pages/recipes/new/NewRecipePreview';
import ContentContainer from '../../components/ui/ContentContainer';

const NewRecipe = () => {
  const activeComponent = useSelector(state => state.newRecipePage.activeComponent);

  const [chosenPhoto, setChosenPhoto] = useState();
  const [chosenPhotoPreviewUrl, setChosenPhotoPreviewUrl] = useState();

  return (
    <ContentContainer>
      <h1>NEW RECIPE PAGE</h1>
      {activeComponent === 'form' && (
        <NewRecipeForm
          setChosenPhoto={setChosenPhoto}
          chosenPhotoPreviewUrl={chosenPhotoPreviewUrl}
          setChosenPhotoPreviewUrl={setChosenPhotoPreviewUrl}
        />
      )}
      {activeComponent === 'preview' && (
        <NewRecipePreview chosenPhoto={chosenPhoto} chosenPhotoPreviewUrl={chosenPhotoPreviewUrl} />
      )}
    </ContentContainer>
  );
};

export default NewRecipe;
