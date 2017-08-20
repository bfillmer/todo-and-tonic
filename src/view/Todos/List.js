
import React from 'react'
import styled from 'styled-components'

import {COMPLETED} from 'types'

import {Remove} from 'view/Todos/Icons'
import {getTheme} from 'view/theme'

export const List = styled.ul`
  padding-top: 2rem;
  padding-bottom: 2rem;
`

// Children styles are applied here as they are specific to this implementation of the list item.
const Li = styled.li`
  display: flex;
  align-items: center;
  justify-items: space-between;
  font-size: 1rem;
  border-bottom: 1px solid ${getTheme('colors', 'primary')};
  &:hover {
    background-color: ${getTheme('colors', 'primary')};
  }
  &:first-child {
    border-top: 1px solid ${getTheme('colors', 'primary')};
  }
`

const Button = styled.button`
  cursor: pointer;
  outline: 0;
  font-size: 1rem;
  text-align: left;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  border: none;
  background: none;
`

const Complete = styled(Button)`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: ${({status}) => status === COMPLETED ? 'line-through' : 'none'};
`

export const Todo = ({id, text, status, completeTodo, removeTodo}) => (
  <Li>
    <Complete status={status} onClick={() => completeTodo(id)}>{text}</Complete>
    <Button onClick={() => removeTodo(id)}><Remove /></Button>
  </Li>
)
