import {SET_SEARCHTAG} from '../actions'

export default function searchTag(state = null, action = {}) {
  switch (action.type) {
    case SET_SEARCHTAG:
      return action.payload
    default:
      return state
  }
}