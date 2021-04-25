import { configureStore, ThunkAction, AnyAction } from '@reduxjs/toolkit'
import {createWrapper, Context} from 'next-redux-wrapper';

import reducer from './reducers'

const debug = process.env.NODE_ENV === "development"

export const createStore = () => {
  const store = configureStore({
    reducer,
    // preloadedState: reducerInitialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
  })
  return store
}

const store = createStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>

export default createWrapper(() => store, { debug });
