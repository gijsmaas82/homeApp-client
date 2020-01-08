import request from 'superagent'
const { url, photoUrl } = require('./constants')

// To-do-list

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

// personal and project information

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

export const PROJECT_INFO = 'PROJECT_INFO'

export function projectInfo (payload) {
  return {
    type: PROJECT_INFO,
    payload
  }
}

export const getProjectInfo = () => dispatch => {
    request(`${url}/project`)
      .then(response => {
        const action = projectInfo(response.body)

        dispatch(action)
      })
      .catch(console.error)
  
}

// Login token

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

// Games-section

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

// photo search app

export const SET_PHOTOS = 'SET_PHOTOS'

function setPhotos(payload) {
  return{
    type: SET_PHOTOS,
    payload
  }
}

export const getPhotos = (tag) => dispatch => {  

  request(`${photoUrl}`)
      .query(`per_page=10&tags=${tag}`)
      .then(response => {
        const action = setPhotos(response.body.photos.photo)
        dispatch(action)
        const pages = setPagination(response.body.photos.pages)
        dispatch(pages)
      })
      .catch(console.error) 
}

export const SET_PAGE = 'SET_PAGE'

function setPage(payload) {
  return {
    type: SET_PAGE,
    payload
  }
}

export const getPage = (pageNumber) => (dispatch, getState) => {  
  const state = getState()
  const { searchTag } = state

  request(`${photoUrl}`)
      .query(`page=${pageNumber}&tags=${searchTag}&per_page=10`)
      .then(response => {
        const action = setPage(response.body.photos.photo)
        dispatch(action)
      })
      .catch(console.error) 
}

export const SET_SEARCHTAG = 'SET_SEARCHTAG'

function setSearchTag(payload) {
  return {
    type: SET_SEARCHTAG,
    payload
  }
}

export const getSearchTag = (tag) => dispatch => {

  const action = setSearchTag(tag)
  dispatch(action)

}

export const SET_PAGINATION = 'SET_PAGINATION'

function setPagination(payload) {
  return {
    type: SET_PAGINATION,
    payload
  }
}

// Profile page 

export const SET_FAVORITE_PHOTOS = 'SET_FAVORITE_PHOTOS'

function setFavoritePhotos(payload) {
  return{
    type: SET_FAVORITE_PHOTOS,
    payload
  }
}

export const getFavoritePhotos = (jwt, page) => dispatch => {  

  request
    .get(`${url}/photo`)
    .set('Authorization', `Bearer ${jwt}`)
    .set('page', page)
    .then(response => {
      const action1 = setPagination(response.body.count)
      const action2 = setFavoritePhotos(response.body.rows)
      dispatch(action1)
      dispatch(action2)
      })
    .catch(console.error)
}

export const getAlbumPhotos = (jwt, album, page) => dispatch => {  

  request
    .get(`${url}/photo`)
    .set('Authorization', `Bearer ${jwt}`)
    .set('album', album )
    .set('page', page)
    .then(response => {
      const action1 = setPagination(response.body.count)
      const action2 = setFavoritePhotos(response.body.rows)
      dispatch(action1)
      dispatch(action2)
      })
    .catch(console.error)
}

export const SET_USER_DRAWINGS = 'SET_USER_DRAWINGS'

function setUserDrawings(payload) {
  return{
    type: SET_USER_DRAWINGS,
    payload
  }
}

export const getUserDrawings = (jwt) => dispatch => {  

  request
    .get(`${url}/drawing`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      const action = setUserDrawings(response.body)
      dispatch(action)
      })
    .catch(console.error)
}

export const SET_USER_ALBUMS = 'SET_USER_ALBUMS'

function setUserAlbums(payload) {
  return{
    type: SET_USER_ALBUMS,
    payload
  }
}

export const getUserAlbums = (jwt) => dispatch => {  

  request
    .get(`${url}/photoalbums`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      const action = setUserAlbums(response.body)
      dispatch(action)
      })
    .catch(console.error)
}