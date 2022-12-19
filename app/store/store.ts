import { configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { api } from './api/api'
import { RootReducer } from './rootReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}
const persistedReducer = persistReducer(persistConfig, RootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] },
    }).concat(api.middleware),
})
export type RootState = ReturnType<typeof RootReducer>
export const persistor = persistStore(store)

