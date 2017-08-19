
import React from 'react'
import styled from 'styled-components'

import {H1} from 'view/Shared/Typography'

const Wrapper = styled.header`
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`

// HEADER COMPOSITION
export const Header = ({name}) => (
  <Wrapper>
    <H1>T&T</H1>
  </Wrapper>
)
