import { createSlice } from '@reduxjs/toolkit';

const newRecipeFormSlice = createSlice({
  name: 'new-recipe-form',
  initialState: {
    enteredName: '',
    enteredCookingTime: '',
    // addedIngredients: [],
    // enteredIngredientAmount: '',
    // enteredIngredientFood: '',
    // enteredIngredientPreparation: '',
    // ingredientIsOptional: false,
  },
  reducers: {
    setEnteredName(state, action) {
      state.enteredName = action.payload;
    },
    setEnteredCookingTime(state, action) {
      state.enteredCookingTime = action.payload;
    },
  },
});

export const newRecipeFormActions = newRecipeFormSlice.actions;

export default newRecipeFormSlice.reducer;
