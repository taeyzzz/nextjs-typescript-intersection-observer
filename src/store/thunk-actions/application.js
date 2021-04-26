import { get } from '../../utils'
import { loadPeopleRequest, loadPeopleSuccess, loadPeopleFailure, loadPeopleIdle } from '../slices/application'

export const loadPeople = () => async dispatch => {
  dispatch(loadPeopleRequest())
  try {
    const listPeople = await get({
      path: "/api/people",
    })
    dispatch(loadPeopleSuccess(listPeople))
  }
  catch (error) {
    dispatch(loadPeopleFailure(error))
  }
  finally {
    dispatch(loadPeopleIdle())
  }
}
