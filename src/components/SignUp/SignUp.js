import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label>
            Name:
            <input
              type='text'
              value={this.props.name}
              name='name'
              placeholder='enter your name'
              onChange={this.props.onChange}
            />
          </label>
          <label>
            password:
            <input
              type='password'
              value={this.props.password}
              name='password'
              placeholder='enter password'
              onChange={this.props.onChange}
            />
          </label>
          <button type='submit'>Sign up</button>
        </form>
      </div>
    )
  }
}
