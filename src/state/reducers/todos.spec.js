/* global describe, expect, test */

import {ADDED_TODO, REMOVED_TODO, COMPLETED_TODO} from 'types'
import {addTodo, removeTodo, completeTodo} from 'actions'

import {initialState, reducer} from 'state/reducers/todos'

describe('[UNIT] Todo Reducer', () => {
  const firstTodo = addTodo('A simple todo item.', 1)
  const secondTodo = addTodo('Another todo item.', 2)
  const stateWithSingleTodo = reducer(initialState, firstTodo)
  const stateWithTwoTodos = reducer(stateWithSingleTodo, secondTodo)

  test(ADDED_TODO, () => {
    expect(stateWithSingleTodo).toMatchSnapshot()
    expect(stateWithTwoTodos).toMatchSnapshot()
  })
  test(REMOVED_TODO, () => {
    const removeAction = removeTodo(2)
    const stateAfterRemove = reducer(stateWithTwoTodos, removeAction)
    expect(stateAfterRemove).toEqual(stateWithSingleTodo)
  })
  test(COMPLETED_TODO, () => {
    const completeAction = completeTodo(1)
    const stateAfterComplete = reducer(stateWithTwoTodos, completeAction)
    expect(stateAfterComplete).toMatchSnapshot()
  })
})
