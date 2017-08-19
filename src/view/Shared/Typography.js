
import styled from 'styled-components'

import {getTheme} from 'view/theme'

export const H1 = styled.h1`
  font-family: 'Fredericka the Great', cursive;
  font-size: 5rem;
  color: ${getTheme('colors', 'secondary')};
  margin-bottom: ${getTheme('bottomMargin')};
`

export const P = styled.p`
  margin-bottom: ${getTheme('bottomMargin')};
`
