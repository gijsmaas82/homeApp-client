import { combineReducers } from 'redux'
import toDoList from './toDoList'
import login from './login'

export default combineReducers({
  login,
  toDoList
})