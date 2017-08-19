
import React from 'react'
import {connect} from 'react-redux'
import {NOT_FOUND} from 'redux-first-router'

import {routeType} from 'selectors'
import {ROUTE_TODOS} from 'types'
import {Todos} from 'view/Todos'

const routesMap = {
  [ROUTE_TODOS]: Todos,
  [NOT_FOUND]: Todos
}

const mapStateToProps = state => ({
  route: routeType(state)
})

const Container = ({route}) => {
  const Route = routesMap[route] ? routesMap[route] : routesMap[NOT_FOUND]
  return (
    <Route />
  )
}

export const Routes = connect(mapStateToProps)(Container)
