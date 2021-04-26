import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FETCH_STATUS_IDLE, FETCH_STATUS_REQUEST, FETCH_STATUS_SUCCESS, FETCH_STATUS_FAILURE } from '../../../utils'

const initialState = {
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
      reducer: (state, action) => {
        state.message = action.payload.message
      },
      prepare: (message) => ({
        payload: { message }
      }),
    },
    loadPeopleRequest: (state, action) => {
      state.loadPeople.fetchStatus = FETCH_STATUS_REQUEST
    },
    loadPeopleSuccess: {
      reducer: (state, action) => {
        state.listPeople = [...state.listPeople, ...action.payload.listPeople]
        state.loadPeople.fetchStatus = FETCH_STATUS_SUCCESS
      },
      prepare: listPeople => ({
        payload: {
          listPeople,
        },
      }),
    },
    loadPeopleFailure: {
      reducer: (state, action) => {
        state.loadPeople.fetchStatus = FETCH_STATUS_FAILURE
        state.loadPeople.error = action.payload.error
      },
      prepare: error => ({
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
