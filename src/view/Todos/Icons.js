
import React from 'react'
import styled from 'styled-components'

import {getTheme} from 'view/theme'

const Icon = styled.svg`
width: 1rem;
height: 1rem;
`

// Check Mark
const InProgressSvg = styled(Icon)`
  fill: ${getTheme('colors', 'secondary')};
`

export const InProgress = () => (
  <InProgressSvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
    <path d='M0 0h24v24H0z' fill='none' />
    <path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' />
  </InProgressSvg>
)

// Completed
const CompletedSvg = styled(Icon)`
  fill: ${getTheme('colors', 'secondary')};
`

export const Completed = () => (
  <CompletedSvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
    <path d='M0 0h24v24H0z' fill='none' />
    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
  </CompletedSvg>
)

// Trash Can
const RemoveSvg = styled(Icon)`
  fill: ${getTheme('colors', 'warning')};
`

export const Remove = () => (
  <RemoveSvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
    <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z' />
    <path d='M0 0h24v24H0z' fill='none' />
  </RemoveSvg>
)
