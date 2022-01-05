import { Fragment, useState } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';

import NewRecipeForm from '../../components/pages/recipes/new/NewRecipeForm';
import NewRecipePreview from '../../components/pages/recipes/new/NewRecipePreview';

const NewRecipe = () => {
  // TODO - Handle someone who's not logged-in navigating to this page (probably redirect them to the homepage)
  // TODO - Add a warning when refreshing/navigating away from this page that unsaved data will be lost

  const activeComponent = useSelector(state => state.newRecipePage.activeComponent);

  const [chosenPhoto, setChosenPhoto] = useState(null);
  const [chosenPhotoPreviewUrl, setChosenPhotoPreviewUrl] = useState('');

  return (
    <Fragment>
      <Head>
        <title>Add your recipe</title>
        {/* TODO - Add Meta data here */}
      </Head>

      {activeComponent === 'form' && (
        <NewRecipeForm
          chosenPhoto={chosenPhoto}
          setChosenPhoto={setChosenPhoto}
          chosenPhotoPreviewUrl={chosenPhotoPreviewUrl}
          setChosenPhotoPreviewUrl={setChosenPhotoPreviewUrl}
        />
      )}
      {activeComponent === 'preview' && (
        <NewRecipePreview
          chosenPhoto={chosenPhoto}
          setChosenPhoto={setChosenPhoto}
          chosenPhotoPreviewUrl={chosenPhotoPreviewUrl}
          setChosenPhotoPreviewUrl={setChosenPhotoPreviewUrl}
        />
      )}
    </Fragment>
  );
};

export default NewRecipe;
