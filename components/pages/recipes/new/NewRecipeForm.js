import classes from './NewRecipeForm.module.css';

const NewRecipeForm = () => {
  const submitHandler = () => {
    console.log('🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮');
  };

  return (
    <div className={classes['new-recipe-form']}>
      <h1>NEW RECIPE FORM</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='name'>What is the name of your recipe?</label>
          <input type='text' required id='name' />
        </div>
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
      </form>
    </div>
  );
};

export default NewRecipeForm;
