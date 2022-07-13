import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isLoggedIn: false, userName: '' };

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.userName = action.payload;
    },
    logOut(state) {
      state.isLoggedIn = false;
      state.userName = '';
    }
  }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
