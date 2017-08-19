
import React from 'react'
import {connect} from 'react-redux'

import {getAllTodos} from 'selectors'
import {addTodo, completeTodo, removeTodo} from 'actions'

import {Section} from 'view/Shared/Layout'
import {AddTodo} from 'view/Todos/AddTodo'
import {List, Todo} from 'view/Todos/List'

const mapStateToProps = state => ({
  todos: getAllTodos(state)
})

const mapDispatchToProps = {
  addTodo,
  completeTodo,
  removeTodo
}

const Container = ({addTodo, completeTodo, removeTodo, todos}) => {
  const renderTodos = todos.map(t => <Todo key={t.id} {...t} />)
  return (
    <Section>
      <AddTodo addTodo={addTodo} />
      <List>
        {renderTodos}
      </List>
    </Section>
  )
}

export const Todos = connect(mapStateToProps, mapDispatchToProps)(Container)
