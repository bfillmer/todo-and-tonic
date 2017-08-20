/* global expect, test */

import React from 'react'
import renderer from 'react-test-renderer'
import {ThemeProvider} from 'styled-components'

import {Container} from 'view/Todos/Container'
import {theme} from 'view/theme'

// MOCK PROPS
const addTodo = () => null
const completeTodo = () => null
const removeTodo = () => null
const todos = [
  {
    'id': 1,
    'status': 'IN_PROGRESS',
    'text': 'A simple todo item.'
  }
]

test('[SNAP] Todos Container', () => {
  const props = {addTodo, completeTodo, removeTodo, todos}
  const expected = renderer.create(
    <ThemeProvider theme={theme}>
      <Container {...props} />
    </ThemeProvider>
  ).toJSON()
  expect(expected).toMatchSnapshot()
})
