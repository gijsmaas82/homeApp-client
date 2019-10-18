import React from 'react'
import SignUp from './SignUp'
import request from 'superagent'
const { url } = require('../../constants')

export default class SignupFormContainer extends React.Component {
    state = { name: '', email: '', password: '' }
  
    signUp = (state) => {
      request
        .post(`${url}/user`)
        .send( state )
        .then(res => {
          console.log(res.body)
        })
        .catch(console.error)
    }
  
    onSubmit = (event) => {
      event.preventDefault()
      this.signUp(this.state)
      this.props.history.push('/')
    }
  
    onChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  
    render() {
      return <SignUp
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    }
  }
