import React from 'react'
import SignUp from './SignUp'
import request from 'superagent'
const { url } = require('../../constants')

export default class SignupFormContainer extends React.Component {
    state = { name: '', password: '' }
  
    signUp = (name, password) => {
      request
        .post(`${url}/user`)
        .send({ name, password })
        .then(res => {
          console.log(res.body)
        })
        .catch(console.error)
    }
  
    onSubmit = (event) => {
      event.preventDefault()
      this.signUp(this.state.name, this.state.password)
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
