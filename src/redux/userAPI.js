import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    user: {
      value: '',
      email: '',
    },
  },
  reducers: {
    login: (state, action) => {
      state.user.value = action.payload;
    },
    logout: (state) => {
      state.user.email = null;
    },
  },
});

export const { login, logout } = tokenSlice.actions;
export const selectUser = (state) => state.token.user.value;
export default tokenSlice.reducer;
