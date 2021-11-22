import { useState } from 'react';
import Form from '../../../ui/form/form';
import FormSection from '../../../ui/form/FormSection';
import CookingTimeInput from './form/CookingTimeInput';
import IngredientInputSection from './form/ingredients/IngredientInputSection';
import NameInput from './form/NameInput';
import classes from './NewRecipeForm.module.css';

const NewRecipeForm = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredCookingTime, setEnteredCookingTime] = useState('');
  // const [ingredientItems, setIngredientItems] = useState([]);

  console.log(enteredName);
  console.log(enteredCookingTime);

  const submitHandler = () => {
    console.log('🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮');
  };

  return (
    <div className={classes['new-recipe-form']}>
      <Form onSubmit={submitHandler}>
        <FormSection>
          <NameInput enteredName={enteredName} setEnteredName={setEnteredName} />
        </FormSection>
        <FormSection>
          <CookingTimeInput
            enteredCookingTime={enteredCookingTime}
            setEnteredCookingTime={setEnteredCookingTime}
          />
        </FormSection>
        {/* ADD PHOTO HERE */}
        <h3>Ingredients</h3>
        <FormSection>
          <IngredientInputSection
            ingredientItems={ingredientItems}
            setIngredientItems={setIngredientItems}
          />
        </FormSection>
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
