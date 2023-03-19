import { configureStore } from '@reduxjs/toolkit';
import moveReducer from '../features/moveSlice';

export const store = configureStore({
  reducer: {
    move: moveReducer,
  },
});
