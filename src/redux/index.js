import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './counter-slice';
import authReducer from './auth-slice';
import wordsReducer from './words-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    words: wordsReducer
  }
  // reducer: { counter: counterSlice.reducer }
});

export const counterActions = counterSlice.actions;

export default store;
