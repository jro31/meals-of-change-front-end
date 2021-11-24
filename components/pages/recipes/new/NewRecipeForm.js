import { useState } from 'react';
import Form from '../../../ui/form/form';
import FormSection from '../../../ui/form/FormSection';
import CookingTimeInput from './form/CookingTimeInput';
import IngredientInputSection from './form/ingredients/IngredientInputSection';
import NameInput from './form/NameInput';
import StepsInput from './form/StepsInput';
import classes from './NewRecipeForm.module.css';

const NewRecipeForm = () => {
  const submitHandler = () => {
    // Check inputs are valid
    // Take to preview page

    // If approved, sumbit to backend
    console.log('🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮');
  };

  return (
    <div className={classes['new-recipe-form']}>
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
        <button>Preview</button>
      </Form>
    </div>
  );
};

export default NewRecipeForm;
