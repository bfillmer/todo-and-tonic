
import {call, put, select, takeEvery} from 'redux-saga/effects'

import {ADDED_TODO, REMOVED_TODO, COMPLETED_TODO} from 'types'
import {getTodoState} from 'selectors'
import {hydrateTodos} from 'actions'

const ls = window.localStorage
const {stringify, parse} = JSON

const KEY = 'tandt-todos'

// PERSIST TODOS TO LOCALSTORAGE
// Actions that we want to persist our todo state on.
const persistTypes = [ADDED_TODO, REMOVED_TODO, COMPLETED_TODO]

function * persistToLocalStorage () {
  const todoState = yield select(getTodoState)
  yield ls.setItem(KEY, stringify(todoState))
}

export function * persist () {
  yield takeEvery(persistTypes, persistToLocalStorage)
}

// HYDRATE TODOS FROM LOCALSTORAGE
export function * hydrate () {
  const localStorageTodos = yield parse(ls.getItem(KEY))
  // @TODO Ideally confirm basic state shape.
  if (localStorageTodos !== null) {
    const action = yield call(hydrateTodos, localStorageTodos)
    yield put(action)
  }
}
