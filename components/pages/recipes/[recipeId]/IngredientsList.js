import { useSelector } from 'react-redux';

import Subheading from '../../../ui/text/Subheading';

const IngredientsList = props => {
  const enteredIngredientAmount = useSelector(state => state.newRecipeForm.enteredIngredientAmount);
  const enteredIngredientFood = useSelector(state => state.newRecipeForm.enteredIngredientFood);
  const enteredIngredientFoodIsValid = useSelector(
    state => state.newRecipeForm.enteredIngredientFoodIsValid
  );
  const enteredIngredientPreparation = useSelector(
    state => state.newRecipeForm.enteredIngredientPreparation
  );
  const ingredientIsOptional = useSelector(state => state.newRecipeForm.ingredientIsOptional);

  const ingredients = () => {
    if (
      props.newRecipeFormPreview &&
      (enteredIngredientAmount ||
        (enteredIngredientFood && enteredIngredientFoodIsValid) ||
        enteredIngredientPreparation)
    ) {
      const newIngredient = {
        amount: enteredIngredientAmount.trim(),
        food: enteredIngredientFood.trim(),
        preparation: enteredIngredientPreparation.trim(),
        optional: ingredientIsOptional,
      };

      return [...props.ingredients, newIngredient];
    }

    return props.ingredients;
  };

  return (
    <div
      className={`${props.className || ''} bg-slate-800 rounded-t-2xl py-4 ${
        props.newRecipeFormPreview ? '' : 'lg:min-h-screen-minus-nav'
      }`}
    >
      <div className='flex justify-between items-center px-4 pb-4'>
        <Subheading className='font-bold'>Ingredients</Subheading>
        {props.cookingTime && <div>{props.cookingTime} minutes</div>}
      </div>
      {ingredients() && (
        <div className='pb-2'>
          {ingredients().map((ingredient, index) => (
            <div
              key={ingredient.food}
              className={`flex items-center px-2 py-3 ${
                index % 2 === 0 ? 'bg-slate-500' : 'bg-slate-800'
              }`}
            >
              <div className='basis-1/3 md:basis-1/4 lg:basis-1/3 grow-0 shrink-0 text-center text-sm font-light'>
                {ingredient.amount}
              </div>
              <div>
                <div>
                  {ingredient.food}
                  {ingredient.optional && (
                    <span className='text-xs font-extra-light'> (optional)</span>
                  )}
                </div>
                <div className='text-xs font-extra-light'>{ingredient.preparation}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IngredientsList;
