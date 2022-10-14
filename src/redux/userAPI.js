import { createSlice } from '@reduxjs/toolkit';
export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    value: 'bfabc95bd4154378910804bd96f58c1a',
  },
  reducers: {
    add: (state) => {
      state.value += 1;
    },
  },
});

export const { add } = tokenSlice.actions;

export default tokenSlice.reducer;
