import React, { Component } from 'react'
import LogIn from './LogIn'
import { connect } from 'react-redux'
import { login } from '../../actions'

class LogInContainer extends Component {
  state = { name: '', password: '', loggedIn: false }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.name, this.state.password)
    this.setState({
      name: '',
      password: '',
      loggedIn: true
    })
    this.props.history.push('/')
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const loggedIn = this.props.user
    return ( 
      <div>  
        <LogIn      
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
          loggedIn={loggedIn}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login
  }
}

export default connect(mapStateToProps, { login })(LogInContainer)
