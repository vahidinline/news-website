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
      state.user.value = action.payload.value;
      state.user.email = action.payload.email;
      state.user.name = action.payload.name;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = tokenSlice.actions;
export const selectUser = (state) => state.token;
export default tokenSlice.reducer;
