import request from 'superagent'
const { url } = require('./constants')

export const ALL_TODO = 'ALL_TODO'

export function allToDo (payload) {
  return {
    type: ALL_TODO,
    payload
  }
}

export const getToDo = () => (dispatch, getState) => {
  const state = getState()
  const { login, toDoList } = state

  if (!toDoList.length) {
    request(`${url}/todolist`)
      .set('Authorization', `Bearer ${login.jwt}`)
      .then(response => {
        const action = allToDo(response.body)

        dispatch(action)
      })
      .catch(console.error)
  }
}

export const PERSONAL_INFO = 'PERSONAL_INFO'

export function personalInfo (payload) {
  return {
    type: PERSONAL_INFO,
    payload
  }
}

export const getPersonalInfo = () => dispatch => {
    request(`${url}/personal`)
      .then(response => {
        const action = personalInfo(response.body)

        dispatch(action)
      })
      .catch(console.error)
  
}

export const JWT = 'JWT'

function jwt(payload) {
  return{
    type: JWT,
    payload
  }
}

export const login = (name, password) => dispatch => {  
  request
  .post(`${url}/login`)
  .send({ name, password })
  .then(res => {
    const action = jwt(res.body)
    dispatch(action)
  })
  .catch(console.error)
}

export const SET_APPLES = 'SET_APPLES'

function setApples(payload) {
  return{
    type: SET_APPLES,
    payload
  }
}

export const getApples = (apples) => dispatch => {  
  const action = setApples(apples)
  dispatch(action)
}