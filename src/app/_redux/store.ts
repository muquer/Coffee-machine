'use client'

import { configureStore } from '@reduxjs/toolkit'
import coffeeReducer from './features/coffee'
import { coffeeMachineApi } from './api/coffee-machine-api'

export const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
    [coffeeMachineApi.reducerPath]: coffeeMachineApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coffeeMachineApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

