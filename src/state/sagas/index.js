
import {fork} from 'redux-saga/effects'

import {routes} from 'state/sagas/routes'
import {persist} from 'state/sagas/todos'

export function * sagas () {
  yield fork(routes)
  yield fork(persist)
}
