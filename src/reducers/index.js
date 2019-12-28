import { combineReducers } from 'redux'
import toDoList from './toDoList'
import login from './login'
import apples from './apples'
import personalInfo from './personalInfo'
import projectInfo from './projectInfo'
import photos from './photos'
import searchTag from './searchTag'
import pagination from './pagination'

export default combineReducers({
  login,
  toDoList,
  apples,
  personalInfo,
  projectInfo,
  photos,
  searchTag,
  pagination
})