import { configureStore } from '@reduxjs/toolkit';

import loginModalReducer from './login-modal';
import mainMenuReducer from './main-menu';
import newRecipeFormReducer from './new-recipe-form';
import profileMenuReducer from './profile-menu';

const store = configureStore({
  reducer: {
    loginModal: loginModalReducer,
    mainMenu: mainMenuReducer,
    newRecipeForm: newRecipeFormReducer,
    profileMenu: profileMenuReducer,
  },
});

export default store;
