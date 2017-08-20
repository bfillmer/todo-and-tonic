/* global expect, test */

import React from 'react'
import renderer from 'react-test-renderer'
import {ThemeProvider} from 'styled-components'

import {Header} from 'view/Shared/Header'
import {theme} from 'view/theme'

test('[SNAP] Header', () => {
  const expected = renderer.create(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  ).toJSON()
  expect(expected).toMatchSnapshot()
})
