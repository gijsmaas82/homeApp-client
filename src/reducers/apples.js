import {SET_APPLES} from '../actions'

export default function apples(state = [], action = {}) {
  switch (action.type) {
    case SET_APPLES:
      return action.payload
    default:
      return state
  }
}