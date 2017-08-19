
// Maps to the type used by the action for navigation.
export const routeType = state => state.location.type

// Return an array of all todos.
export const getAllTodos = state => state.todos.allIds.map(id => state.todos.byId[id])

// Return full todos state slice.
export const getTodoState = state => state.todos
