
import cuid from 'cuid'
import {createAction} from 'redux-actions'

import * as types from 'types'

// TODOS
const todo = (
  text = '',
  id = cuid(),
  status = types.IN_PROGRESS
) => ({id, text, status})

export const addTodo = createAction(types.ADDED_TODO, todo)

export const removeTodo = createAction(types.REMOVED_TODO)

export const completeTodo = createAction(types.COMPLETED_TODO)

export const hydrateTodos = createAction(types.HYDRATED_TODOS)
