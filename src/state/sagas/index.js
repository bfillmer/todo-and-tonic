
import {fork} from 'redux-saga/effects'

import {routes} from 'state/sagas/routes'
import {localStorage} from 'state/sagas/localStorage'

export function * sagas () {
  yield fork(routes)
  yield fork(localStorage)
}
