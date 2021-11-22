import Form from '../../../ui/form/form';
import FormSection from '../../../ui/form/FormSection';
import NameInput from './form/NameInput';
import classes from './NewRecipeForm.module.css';

const NewRecipeForm = () => {
  const submitHandler = () => {
    console.log('🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮');
  };

  return (
    <div className={classes['new-recipe-form']}>
      <Form onSubmit={submitHandler}>
        <FormSection>
          <NameInput />
        </FormSection>
        {/* ADD PHOTO HERE */}
        <h3>Ingredients</h3>
        <div>
          <div>
            <label htmlFor='amount'>Amount</label>
            <input type='text' id='amount' />
            <label htmlFor='ingredient'>Ingredient</label>
            <input type='text' required id='ingredient' />
            <label htmlFor='optional'>Optional</label>
            <input type='checkbox' id='optional' />
          </div>
          <button>Add another ingredient</button>
        </div>
        <button>Add recipe</button>
      </Form>
    </div>
  );
};

export default NewRecipeForm;
