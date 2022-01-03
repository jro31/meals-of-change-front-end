import { Fragment, useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { registrationModalActions } from '../../store/registration-modal';
import NewRecipeForm from '../../components/pages/recipes/new/NewRecipeForm';
import NewRecipePreview from '../../components/pages/recipes/new/NewRecipePreview';

const NewRecipe = () => {
  // TODO - Handle someone who's not logged-in navigating to this page (probably redirect them to the homepage)
  // TODO - Add a warning when refreshing/navigating away from this page that unsaved data will be lost

  const dispatch = useDispatch();

  const activeComponent = useSelector(state => state.newRecipePage.activeComponent);
  const loggedInStatus = useSelector(state => state.loginStatus.loggedInStatus);
  const registrationModalIsOpen = useSelector(
    state => state.registrationModal.registrationModalIsOpen
  );

  const [chosenPhoto, setChosenPhoto] = useState(null);
  const [chosenPhotoPreviewUrl, setChosenPhotoPreviewUrl] = useState('');

  const checkUserLoggedIn = useCallback(() => {
    if (loggedInStatus !== 'LOGGED_IN') {
      dispatch(registrationModalActions.setModalTitle('You must be logged-in to add a recipe'));
      dispatch(registrationModalActions.openModal());
    }
  }, [dispatch, loggedInStatus]);

  useEffect(() => {
    checkUserLoggedIn();
  }, [checkUserLoggedIn, registrationModalIsOpen]);

  return (
    <Fragment>
      <Head>
        <title>Add your recipe</title>
        {/* TODO - Add Meta data here */}
      </Head>
      <div className='flex justify-center fixed top-14 inset-x-0 bottom-0 -z-10 bg-black'>
        <div className='basis-4/5 bg-slate-800 rounded-2xl px-10'>
          {activeComponent === 'form' && (
            <NewRecipeForm
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
        </div>
      </div>
    </Fragment>
  );
};

export default NewRecipe;
