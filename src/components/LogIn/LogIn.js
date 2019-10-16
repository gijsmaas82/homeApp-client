import React, { Component } from 'react'

export default class LogIn extends Component {
  render() {
    return (
      <div>
        {this.props.loggedIn ? <h1>You already logged in.</h1>: 
        <div><h2>Login</h2>
        <form onSubmit={this.props.onSubmit}>
          <label>
            Name:
            <input 
            type='text' 
            value={this.props.name} 
            name='name' 
            placeholder='enter your name' 
            onChange={this.props.onChange} 
            />
          </label>
          <label>
            Password:
            <input
            type='password'
            value={this.props.password}
            name='password'
            placeholder='enter password'
            onChange={this.props.onChange}
            />
          </label>
          <button type='submit'>Login</button>
        </form></div>}
      </div>
    )
  }
}
