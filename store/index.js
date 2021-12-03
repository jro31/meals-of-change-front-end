import { configureStore } from '@reduxjs/toolkit';

import loginFormReducer from './login-form';
import loginStatusReducer from './login-status';
import mainMenuReducer from './main-menu';
import newRecipeFormReducer from './new-recipe-form';
import profileMenuReducer from './profile-menu';
import registrationModalReducer from './registration-modal';

const store = configureStore({
  reducer: {
    loginForm: loginFormReducer,
    loginStatus: loginStatusReducer,
    registrationModal: registrationModalReducer,
    mainMenu: mainMenuReducer,
    newRecipeForm: newRecipeFormReducer,
    profileMenu: profileMenuReducer,
  },
});

export default store;
