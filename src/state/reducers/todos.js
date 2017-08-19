
import {handleActions} from 'redux-actions'

import {ADDED_TODO, REMOVED_TODO, COMPLETED_TODO, COMPLETED} from 'types'

const assign = Object.assign

export const initialState = {
  byId: {},
  allIds: []
}

const addTodo = (state, {payload}) => {
  const {id} = payload
  const byId = assign({}, state.byId, {
    [id]: payload
  })
  const allIds = [...state.allIds, id]
  return {
    byId,
    allIds
  }
}

const removeTodo = (state, {payload: id}) => {
  const byId = assign({}, state.byId)
  delete byId[id]
  const allIds = state.allIds.filter(i => i !== id)
  return {
    byId,
    allIds
  }
}

const completeTodo = (state, {payload: id}) => assign({}, state, {
  byId: assign({}, state.byId, {
    [id]: assign({}, state.byId[id], {status: COMPLETED})
  })
})

export const reducer = handleActions({
  [ADDED_TODO]: addTodo,
  [REMOVED_TODO]: removeTodo,
  [COMPLETED_TODO]: completeTodo
}, initialState)
