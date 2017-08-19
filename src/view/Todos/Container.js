
import React from 'react'
import {connect} from 'react-redux'

import {getAllTodos} from 'selectors'
import {addTodo, completeTodo, removeTodo} from 'actions'

import {Section} from 'view/Shared/Layout'
import {AddTodo} from 'view/Todos/AddTodo'

const mapStateToProps = state => ({
  todos: getAllTodos(state)
})

const mapDispatchToProps = {
  addTodo,
  completeTodo,
  removeTodo
}

const Container = ({addTodo, completeTodo, removeTodo, todos}) => {
  const renderTodos = todos.map(t => <li>{t.id} {t.text} {t.status}</li>)
  return (
    <Section>
      <AddTodo addTodo={addTodo} />
      <ul>
        {renderTodos}
      </ul>
    </Section>
  )
}

export const Todos = connect(mapStateToProps, mapDispatchToProps)(Container)
