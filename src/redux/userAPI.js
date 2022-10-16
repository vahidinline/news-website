import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    user: {
      value: '',
      email: '',
      name: 'user',
    },
  },
  reducers: {
    login: (state, action) => {
      state.user.value = action.payload;
      state.user.email = action.payload;
      state.user.name = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = tokenSlice.actions;
export const selectUser = (state) => state.token.user;
export default tokenSlice.reducer;
