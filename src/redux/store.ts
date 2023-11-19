import { configureStore } from '@reduxjs/toolkit';
import { settingsReducer } from './settingsSlice';
import { createMigrate, persistReducer, persistStore } from 'redux-persist';
import { migrations } from './migrations';
import storage from 'redux-persist/lib/storage';

const settingsConfig = {
  key: 'settings-color',
  version: 1,
  storage,
  migrate: createMigrate(migrations),
};

const persistedReducer = persistReducer(settingsConfig, settingsReducer);

export const store = configureStore({
  reducer: { settings: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: true,
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
