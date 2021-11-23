import { createSlice } from '@reduxjs/toolkit';

const newRecipeFormSlice = createSlice({
  name: 'new-recipe-form',
  initialState: {
    enteredName: '',
    enteredCookingTime: '',
    addedIngredients: [],
    enteredIngredientAmount: '',
    enteredIngredientFood: '',
    enteredIngredientPreparation: '',
    ingredientIsOptional: false,
  },
  reducers: {
    setEnteredName(state, action) {
      state.enteredName = action.payload;
    },
    setEnteredCookingTime(state, action) {
      state.enteredCookingTime = action.payload;
    },
    setEnteredIngredientAmount(state, action) {
      state.enteredIngredientAmount = action.payload;
    },
    setEnteredIngredientFood(state, action) {
      state.enteredIngredientFood = action.payload;
    },
    setEnteredIngredientPreparation(state, action) {
      state.enteredIngredientPreparation = action.payload;
    },
    setIngredientIsOptional(state, action) {
      state.ingredientIsOptional = action.payload;
    },
  },
});

export const newRecipeFormActions = newRecipeFormSlice.actions;

export default newRecipeFormSlice.reducer;
