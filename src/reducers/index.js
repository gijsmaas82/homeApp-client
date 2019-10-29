import { combineReducers } from 'redux'
import toDoList from './toDoList'
import login from './login'
import apples from './apples'

export default combineReducers({
  login,
  toDoList,
  apples
})