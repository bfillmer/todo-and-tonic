
import {connectRoutes} from 'redux-first-router'
import createHistory from 'history/createBrowserHistory'

import {ROUTE_TODOS} from 'types'

const routesMap = {
  [ROUTE_TODOS]: '/'
}

const history = createHistory()

export const {
  reducer,
  middleware,
  enhancer,
  initialDispatch
} = connectRoutes(history, routesMap)
