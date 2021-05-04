export const message = "WIP"

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FETCH_STATUS_IDLE, FETCH_STATUS_REQUEST, FETCH_STATUS_SUCCESS, FETCH_STATUS_FAILURE } from '../../../utils'

import { ApplicationReducerState, People } from './types'

const initialState: ApplicationReducerState = {
  message: 'hello world',
  listPeople: [],
  loadPeople: {
    fetchStatus: FETCH_STATUS_IDLE,
    error: undefined
  }
}

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    changeMessage: {
      reducer: (state, action: PayloadAction<{ message: string}>) => {
        state.message = action.payload.message
      },
      prepare: (message: string) => {
        return {
            payload: { message }
        }
      },
    },
    loadPeopleRequest: (state, action) => {
      state.loadPeople.fetchStatus = FETCH_STATUS_REQUEST
    },
    loadPeopleSuccess: {
      reducer: (state, action: PayloadAction<{ listPeople: People[] }>) => {
        state.listPeople = [...state.listPeople, ...action.payload.listPeople]
        state.loadPeople.fetchStatus = FETCH_STATUS_SUCCESS
      },
      prepare: (listPeople: People[]) => ({
        payload: {
          listPeople,
        },
      }),
    },
    loadPeopleFailure: {
      reducer: (state, action: PayloadAction<{ error: any }>) => {
        state.loadPeople.fetchStatus = FETCH_STATUS_FAILURE
        state.loadPeople.error = action.payload.error
      },
      prepare: (error: any) => ({
        payload: {
          error,
        },
      }),
    },
    loadPeopleIdle: (state, action) => {
      state.loadPeople.fetchStatus = FETCH_STATUS_IDLE
    }
  },
})

export const {
  changeMessage,
  loadPeopleRequest,
  loadPeopleSuccess,
  loadPeopleFailure,
  loadPeopleIdle,
 } = applicationSlice.actions

export default applicationSlice.reducer
