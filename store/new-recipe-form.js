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
  steps: [
    {
      id: 1,
      isEditing: true,
      text: '',
    },
  ],
  tags: {
    dishType: ['Test tag 1', 'Test tag 2'],
    cuisine: [],
    other: [],
  },
};

const notEditingSteps = steps => steps.map(step => ({ ...step, isEditing: false }));

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
    setSteps(state, action) {
      state.steps = state.steps.map(step =>
        step.id === action.payload.id ? { ...step, text: action.payload.text } : step
      );
    },
    addNewStep(state) {
      state.steps = [
        ...notEditingSteps(state.steps),
        { id: Math.max(...state.steps.map(step => step.id)) + 1, isEditing: true, text: '' },
      ];
    },
    editStep(state, action) {
      state.steps = notEditingSteps(state.steps).map(step =>
        step.id === action.payload ? { ...step, isEditing: true } : step
      );
    },
    finishEditingSteps(state) {
      state.steps = notEditingSteps(state.steps);
    },
    addTag(state, action) {
      state.tags = {
        ...state.tags,
        [action.payload.type]: [...state.tags[action.payload.type], action.payload.tag],
      };
    },
    removeTag(state) {},
  },
});

export const newRecipeFormActions = newRecipeFormSlice.actions;

export default newRecipeFormSlice.reducer;
