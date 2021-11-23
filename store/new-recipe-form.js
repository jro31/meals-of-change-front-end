import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enteredName: '',
  enteredNameIsValid: false,
  enteredCookingTime: '',
  enteredCookingTimeIsValid: false,
  enteredIngredientAmount: '',
  enteredIngredientFood: '',
  enteredIngredientFoodIsValid: false,
  enteredIngredientPreparation: '',
  ingredientIsOptional: false,
  addedIngredients: [],
};

const newRecipeFormSlice = createSlice({
  name: 'new-recipe-form',
  initialState,
  reducers: {
    setEnteredName(state, action) {
      state.enteredName = action.payload;
    },
    setEnteredNameIsValid(state, action) {
      state.enteredNameIsValid = action.payload;
    },
    setEnteredCookingTime(state, action) {
      state.enteredCookingTime = action.payload;
    },
    setEnteredCookingTimeIsValid(state, action) {
      state.enteredCookingTimeIsValid = action.payload;
    },
    setEnteredIngredientAmount(state, action) {
      state.enteredIngredientAmount = action.payload;
    },
    setEnteredIngredientFood(state, action) {
      state.enteredIngredientFood = action.payload;
    },
    setEnteredIngredientFoodIsValid(state, action) {
      state.enteredIngredientFoodIsValid = action.payload;
    },
    setEnteredIngredientPreparation(state, action) {
      state.enteredIngredientPreparation = action.payload;
    },
    setIngredientIsOptional(state, action) {
      state.ingredientIsOptional = action.payload;
    },
    setAddedIngredients(state, action) {
      state.addedIngredients = [...state.addedIngredients, action.payload];
    },
    resetEnteredIngredient(state) {
      state.enteredIngredientAmount = initialState.enteredIngredientAmount;
      state.enteredIngredientFood = initialState.enteredIngredientFood;
      state.enteredIngredientFoodIsValid = initialState.enteredIngredientFoodIsValid;
      state.enteredIngredientPreparation = initialState.enteredIngredientPreparation;
      state.ingredientIsOptional = initialState.ingredientIsOptional;
    },
  },
});

export const newRecipeFormActions = newRecipeFormSlice.actions;

export default newRecipeFormSlice.reducer;
