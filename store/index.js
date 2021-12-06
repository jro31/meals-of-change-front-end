import { configureStore } from '@reduxjs/toolkit';

import loginFormReducer from './login-form';
import loginStatusReducer from './login-status';
import mainMenuReducer from './main-menu';
import newRecipeFormReducer from './new-recipe-form';
import profileMenuReducer from './profile-menu';
import registrationModalReducer from './registration-modal';
import signUpFormReducer from './sign-up-form';

const store = configureStore({
  reducer: {
    loginForm: loginFormReducer,
    loginStatus: loginStatusReducer,
    mainMenu: mainMenuReducer,
    newRecipeForm: newRecipeFormReducer,
    profileMenu: profileMenuReducer,
    registrationModal: registrationModalReducer,
    signUpForm: signUpFormReducer,
  },
});

export default store;
