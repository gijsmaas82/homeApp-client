import {SET_FAVORITE_PHOTOS} from '../actions'

export default function favoritePhotos(state = [], action = {}) {
  switch (action.type) {
    case SET_FAVORITE_PHOTOS:
      return action.payload
    default:
      return state
  }
}