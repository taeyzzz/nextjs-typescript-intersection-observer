export const message = "WIP"

// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { FETCH_STATUS_IDLE, FETCH_STATUS_REQUEST, FETCH_STATUS_SUCCESS, FETCH_STATUS_FAILURE } from '../../../utils'
//
// import { ApplicationReducerState } from './types'
//
// const initialState = {
//   message: 'hello world',
//   listPeople: [],
//   loadPeople: {
//     fetchStatus: FETCH_STATUS_IDLE,
//     error: undefined
//   }
// }
//
// const applicationSlice = createSlice({
//   name: 'application',
//   initialState,
//   reducers: {
//     changeMessage: {
//       reducer: (state, action: PayloadAction<ApplicationReducerState>) => {
//         state.message = action.payload.message
//       },
//       prepare: (message: string) => ({
//         payload: { message }
//       }),
//     },
//     loadPeopleRequest: (state, action: PayloadAction<ApplicationReducerState>) => {
//       state.loadPeople.fetchStatus = FETCH_STATUS_REQUEST
//     },
//     loadPeopleSuccess: {
//       reducer: (state, action: PayloadAction<ApplicationReducerState>) => {
//         state.listPeople = [...state.listPeople, ...action.payload.listPeople]
//         state.loadPeople.fetchStatus = FETCH_STATUS_SUCCESS
//       },
//       prepare: listPeople => ({
//         payload: {
//           listPeople,
//         },
//       }),
//     },
//     loadPeopleFailure: {
//       reducer: (state, action: PayloadAction<ApplicationReducerState>) => {
//         state.loadPeople.fetchStatus = FETCH_STATUS_FAILURE
//         state.loadPeople.error = action.payload.error
//       },
//       prepare: error => ({
//         payload: {
//           error,
//         },
//       }),
//     },
//     loadPeopleIdle: (state, action: PayloadAction<ApplicationReducerState>) => {
//       state.loadPeople.fetchStatus = FETCH_STATUS_IDLE
//     }
//   },
// })
//
// export const {
//   changeMessage,
//   loadPeopleRequest,
//   loadPeopleSuccess,
//   loadPeopleFailure,
//   loadPeopleIdle,
//  } = applicationSlice.actions
//
// export default applicationSlice.reducer
