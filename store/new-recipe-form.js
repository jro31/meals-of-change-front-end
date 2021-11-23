import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enteredName: '',
  enteredNameIsValid: false,
  nameInputIsTouched: false,
  enteredCookingTime: '',
  enteredCookingTimeIsValid: false,
  cookingTimeInputIsTouched: false,
  enteredIngredientAmount: '',
  enteredIngredientFood: '',
  enteredIngredientFoodIsValid: false,
  ingredientFoodInputIsTouched: false,
  enteredIngredientPreparation: '',
  ingredientIsOptional: false,
  addIngredientButtonIsClicked: false,
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
    setNameInputIsTouched(state) {
      state.nameInputIsTouched = true;
    },
    setEnteredCookingTime(state, action) {
      state.enteredCookingTime = action.payload;
    },
    setEnteredCookingTimeIsValid(state, action) {
      state.enteredCookingTimeIsValid = action.payload;
    },
    setCookingTimeInputIsTouched(state) {
      state.cookingTimeInputIsTouched = true;
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
    setIngredientFoodInputIsTouched(state) {
      state.ingredientFoodInputIsTouched = true;
    },
    setEnteredIngredientPreparation(state, action) {
      state.enteredIngredientPreparation = action.payload;
    },
    setIngredientIsOptional(state, action) {
      state.ingredientIsOptional = action.payload;
    },
    setAddIngredientButtonIsClicked(state) {
      state.addIngredientButtonIsClicked = true;
    },
    setAddedIngredients(state, action) {
      state.addedIngredients = [...state.addedIngredients, action.payload];
    },
    resetEnteredIngredient(state) {
      state.enteredIngredientAmount = initialState.enteredIngredientAmount;
      state.enteredIngredientFood = initialState.enteredIngredientFood;
      state.enteredIngredientFoodIsValid = initialState.enteredIngredientFoodIsValid;
      state.ingredientFoodInputIsTouched = initialState.ingredientFoodInputIsTouched;
      state.enteredIngredientPreparation = initialState.enteredIngredientPreparation;
      state.ingredientIsOptional = initialState.ingredientIsOptional;
      state.addIngredientButtonIsClicked = initialState.addIngredientButtonIsClicked;
    },
    deleteAddedIngredient(state, action) {
      state.addedIngredients = state.addedIngredients.filter(
        ingredient => ingredient.tempId !== action.payload
      );
    },
  },
});

export const newRecipeFormActions = newRecipeFormSlice.actions;

export default newRecipeFormSlice.reducer;
