
import {spawn, takeEvery} from 'redux-saga/effects'

// Routes that require side effects on load are mapped here, [type]: saga.
const routesMap = {}

// Spawn the saga associated with the route type.
function * handleRouteChange ({type}) {
  yield spawn(routesMap[type])
}

// Watch for all actions dispatched that have an action type in our routesMap.
export function * routes () {
  yield takeEvery(Object.keys(routesMap), handleRouteChange)
}
