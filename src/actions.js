import request from 'superagent'
const baseUrl = 'http://localhost:4000'

export const ALL_TODO = 'ALL_TODO'

export function allToDo (payload) {
  return {
    type: ALL_TODO,
    payload
  }
}

export const getToDo = () => (dispatch, getState) => {
  const state = getState()
  const { toDoList } = state

  if (!toDoList.length) {
    request(`${baseUrl}/todolist`)
      .then(response => {
        const action = allToDo(response.body)

        dispatch(action)
      })
      .catch(console.error)
  }
}