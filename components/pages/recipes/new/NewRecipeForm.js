import Form from '../../../ui/form/form';
import FormSection from '../../../ui/form/FormSection';
import CookingTimeInput from './form/CookingTimeInput';
import IngredientInputSection from './form/ingredients/IngredientInputSection';
import NameInput from './form/NameInput';
import PrefaceInput from './form/PrefaceInput';
import StepsInput from './form/StepsInput';
import TagsInputSection from './form/tags/TagsInputSection';

const NewRecipeForm = () => {
  const submitHandler = () => {
    // Remember to '.trim()' inputs
    // Check inputs are valid
    // With tags, remember to remove tags duplicated over the three inputs
    // Take to preview page

    // If approved, sumbit to backend
    console.log('🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮');
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
        {/* ADD PHOTO HERE */}
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
