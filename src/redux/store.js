import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import tokenReducer from './userAPI';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'token',
  storage,
};

const reducer = combineReducers({
  token: tokenReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
