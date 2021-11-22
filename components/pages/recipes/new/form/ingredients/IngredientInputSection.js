import { Fragment, useState } from 'react';
import AmountInput from './AmountInput';
import FoodInput from './FoodInput';
import OptionalCheckbox from './OptionalCheckbox';
import PreparationInput from './PreparationInput';

const IngredientInputSection = () => {
  const [ingredientItems, setIngredientItems] = useState([]);

  return (
    <Fragment>
      {ingredientItems.map(ingredientItem => {
        <div>{ingredientItem.ingredient}</div>;
      })}
      <AmountInput />
      <FoodInput />
      <PreparationInput />
      <OptionalCheckbox />
    </Fragment>
  );
};

export default IngredientInputSection;
