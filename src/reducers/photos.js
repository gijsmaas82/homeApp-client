import {SET_PHOTOS, SET_PAGE } from '../actions'

export default function photos(state = null, action = {}) {
  switch (action.type) {
    case SET_PHOTOS:
      return action.payload
    case SET_PAGE:
      return action.payload
    default:
      return state
  }
}