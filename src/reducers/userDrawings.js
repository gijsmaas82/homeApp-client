import {SET_USER_DRAWINGS} from '../actions'

export default function userDrawings(state = [], action = {}) {
  switch (action.type) {
    case SET_USER_DRAWINGS:
      return action.payload
    default:
      return state
  }
}