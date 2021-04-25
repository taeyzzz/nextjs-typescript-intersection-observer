import { FETCH_STATUS_IDLE, FETCH_STATUS_REQUEST, FETCH_STATUS_SUCCESS, FETCH_STATUS_FAILURE } from '../../../utils'

export enum FetchStatusEnum {
  FETCH_STATUS_IDLE,
  FETCH_STATUS_REQUEST,
  FETCH_STATUS_SUCCESS,
  FETCH_STATUS_FAILURE
}

export interface FetchStatus {
  fetchStatus: FetchStatusEnum
  error: any
}

export interface People {
  id: string
  name: string
  img: string
  description: string
}

export interface ApplicationReducerState {
  message: string
  listPeople: People[]
  loadPeople: FetchStatus
}
