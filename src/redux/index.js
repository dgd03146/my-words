import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth-slice';
import wordsReducer from './words-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    words: wordsReducer
  }
});

export default store;
