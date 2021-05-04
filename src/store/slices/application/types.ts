import { FETCH_STATUS_IDLE, FETCH_STATUS_REQUEST, FETCH_STATUS_SUCCESS, FETCH_STATUS_FAILURE } from '../../../utils'

type UnionFetchStatus = typeof FETCH_STATUS_IDLE | typeof FETCH_STATUS_REQUEST | typeof FETCH_STATUS_SUCCESS | typeof FETCH_STATUS_FAILURE
export interface FetchStatus {
  fetchStatus: UnionFetchStatus
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
