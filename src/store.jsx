import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './components/counterSlice';
import usersReducer from './components/usersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
  // middleware and devTools configured automatically
});

export default store;
