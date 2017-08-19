
import {combineReducers} from 'redux'

import {reducer as location} from 'state/routes'
import {reducer as todos} from 'state/reducers/todos'

export const reducers = combineReducers({
  location,
  todos
})
