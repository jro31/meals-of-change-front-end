import { configureStore } from '@reduxjs/toolkit';

import accountFormReducer from './account-form';
import contactModalReducer from './contact-modal';
import loginFormReducer from './login-form';
import loginStatusReducer from './login-status';
import mainMenuReducer from './main-menu';
import newRecipeFormReducer from './new-recipe-form';
import newRecipePageReducer from './new-recipe-page';
import profileMenuReducer from './profile-menu';
import registrationModalReducer from './registration-modal';
import shareModalReducer from './share-modal';
import signUpFormReducer from './sign-up-form';

const store = configureStore({
  reducer: {
    accountForm: accountFormReducer,
    contactModal: contactModalReducer,
    loginForm: loginFormReducer,
    loginStatus: loginStatusReducer,
    mainMenu: mainMenuReducer,
    newRecipeForm: newRecipeFormReducer,
    newRecipePage: newRecipePageReducer,
    profileMenu: profileMenuReducer,
    registrationModal: registrationModalReducer,
    shareModal: shareModalReducer,
    signUpForm: signUpFormReducer,
  },
});

export default store;
