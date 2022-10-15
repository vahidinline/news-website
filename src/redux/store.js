import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';

import tokenReducer from './userAPI';
// import { persistReducer } from 'redux-persist';
// import { CombinedState } from '@reduxjs/toolkit';

// const persistConfig = {
//   key: 'token',
//   storage,
// };

// const reducer = combineReducers({});

// const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: {
    token: tokenReducer,
  },
});
