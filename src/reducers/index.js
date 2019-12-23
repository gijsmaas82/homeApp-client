import { combineReducers } from 'redux'
import toDoList from './toDoList'
import login from './login'
import apples from './apples'
import personalInfo from './personalInfo'

export default combineReducers({
  login,
  toDoList,
  apples,
  personalInfo
})