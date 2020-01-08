import {SET_USER_ALBUMS} from '../actions'

export default function userAlbums(state = [], action = {}) {
  switch (action.type) {
    case SET_USER_ALBUMS:
      return action.payload
    default:
      return state
  }
}