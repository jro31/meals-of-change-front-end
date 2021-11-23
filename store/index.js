import { configureStore } from '@reduxjs/toolkit';

import mainMenuReducer from './main-menu';
import newRecipeFormReducer from './new-recipe-form';
import profileMenuReducer from './profile-menu';

const store = configureStore({
  reducer: {
    mainMenu: mainMenuReducer,
    newRecipeForm: newRecipeFormReducer,
    profileMenu: profileMenuReducer,
  },
});

export default store;
