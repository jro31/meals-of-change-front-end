import { configureStore } from '@reduxjs/toolkit';

import mainMenuReducer from './main-menu';
import profileMenuReducer from './profile-menu';

const store = configureStore({
  reducer: {
    mainMenu: mainMenuReducer,
    profileMenu: profileMenuReducer,
  },
});

export default store;
