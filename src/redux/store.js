import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './userAPI';
export default configureStore({
  reducer: {
    token: tokenReducer,
  },
});
