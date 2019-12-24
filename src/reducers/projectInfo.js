import { PROJECT_INFO } from "../actions";

export default function (state = [], action = {}) {
  switch (action.type) {
    case PROJECT_INFO:
      return action.payload
    default:
      return state
  }
}