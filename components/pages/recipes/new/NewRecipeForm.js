import { useDispatch, useSelector } from 'react-redux';

import Form from '../../../ui/form/form';
import FormSection from '../../../ui/form/FormSection';
import CookingTimeInput from './form/CookingTimeInput';
import IngredientInputSection from './form/ingredients/IngredientInputSection';
import NameInput from './form/NameInput';
import PhotoInput from './form/PhotoInput';
import PrefaceInput from './form/PrefaceInput';
import StepsInput from './form/StepsInput';
import TagsInputSection from './form/tags/TagsInputSection';
import { newRecipePageActions } from '../../../../store/new-recipe-page';

const NewRecipeForm = props => {
  const dispatch = useDispatch();
  const enteredNameIsValid = useSelector(state => state.newRecipeForm.enteredNameIsValid);
  const enteredCookingTimeIsValid = useSelector(
    state => state.newRecipeForm.enteredCookingTimeIsValid
  );

  const formIsValid = () => enteredNameIsValid && enteredCookingTimeIsValid; // TODO - Complete this

  const previewHandler = event => {
    event.preventDefault();
    // If ingredient food input .trim() is populated, add to ingredients array and clear the inputs
    // If not, do nothing
    // If steps input .trim() is populated, add to the steps array and clear the input
    // Check the form is valid

    // If the form is valid...
    dispatch(newRecipePageActions.showPreview());
  };

  return (
    <div className='bg-white rounded-lg'>
      <Form onSubmit={previewHandler}>
        <FormSection>
          <NameInput />
        </FormSection>
        <FormSection>
          <CookingTimeInput />
        </FormSection>
        <FormSection>
          <PhotoInput
            setChosenPhoto={props.setChosenPhoto}
            setChosenPhotoPreviewUrl={props.setChosenPhotoPreviewUrl}
          />
          {/* TODO - Update to use next/image */}
          {props.chosenPhotoPreviewUrl && <img src={props.chosenPhotoPreviewUrl} />}
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
