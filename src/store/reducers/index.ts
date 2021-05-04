import { combineReducers, AnyAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { ApplicationReducerState } from '../slices/application/types'

import application from '../slices/application'

export interface ReducerState {
  application: ApplicationReducerState
}

const appCombineReducers = combineReducers({
  application,
})

const rootReducer = (state: ReducerState, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    }
  }
  return appCombineReducers(state, action)
}

export default rootReducer
