import { ALL_TODO } from "../actions";
// import { ADD_TODO } from "../actions";

export default function (state = [], action = {}) {
  switch (action.type) {
    case ALL_TODO:
      return action.payload
    // case ADD_TODO:
    //   return [...state,{...action.payload}]
    default:
      return state
  }
}