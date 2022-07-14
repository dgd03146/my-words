import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isLoggedIn: false, user: {} };

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
    },
    setUser(state, action) {
      state.user = { ...action.payload };
    }
  }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
