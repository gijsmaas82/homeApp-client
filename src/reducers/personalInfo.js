import { PERSONAL_INFO } from "../actions";

export default function (state = [], action = {}) {
  switch (action.type) {
    case PERSONAL_INFO:
      return action.payload
    default:
      return state
  }
}