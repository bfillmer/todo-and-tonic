
import React from 'react'
import styled from 'styled-components'

import {Completed, InProgress, Remove} from 'view/Todos/Icons'

export const List = styled.ul`
  padding-top: 2rem;
  padding-bottom: 2rem;
`

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-items: space-between;
  span {
    flex: 1;
  }
`

export const Todo = ({id, text, status}) => (
  <Li>
    <InProgress />
    <span>{text}</span>
    <Remove />
  </Li>
)
