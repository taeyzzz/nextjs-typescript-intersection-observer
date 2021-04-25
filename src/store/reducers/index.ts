import { combineReducers } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

import application from '../slices/application'

const appCombineReducers = combineReducers({
  application,
})

const rootReducer = (state: RootState, action: PayloadAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    }
  }
  return appCombineReducers(state, action)
}

export default rootReducer
