
import React, {Component} from 'react'
import styled from 'styled-components'

import {getTheme} from 'view/theme'

const Input = styled.input`
  width: 100%;
  font-size: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 1px solid ${getTheme('colors', 'black')};
  border-radius: 0.25rem;
  &::placeholder {
    color: #ccc;
  }
`

export class AddTodo extends Component {
  constructor () {
    super()
    this.state = {
      text: ''
    }
    this.handleText = this.handleText.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleText (e) {
    this.setState({text: e.target.value})
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.addTodo(this.state.text)
    this.setState(state => ({text: ''}))
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type='text'
          value={this.state.text}
          onChange={this.handleText}
          placeholder='I need to...'
        />
      </form>
    )
  }
}
