import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

// Redux tipi: RootState va AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
