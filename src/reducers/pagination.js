import { SET_PAGINATION } from '../actions'

export default function pagination(state = null, action = {}) {
  switch (action.type) {
    case SET_PAGINATION:
      return action.payload
    default:
      return state
  }
}