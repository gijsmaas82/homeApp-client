import React from 'react'
import SignUp from './SignUp'
import request from 'superagent'
const { url } = require('../../constants')

export default class SignupFormContainer extends React.Component {
    state = { 
      name: 'User',
      email: null, 
      password: null,
      avatar: 'https://seedlingsgardening.com/wp-content/uploads/sites/9/2016/11/avatar.jpg',
      description: 'Short description of user',
      filename: 'your-file',
      signedUp: false,
      message: ''
    }
  
    signUp = (state) => {
      request
        .post(`${url}/user`)
        .send( state )
        .then(res => {
          if (res.body.name) {
            this.setState({ signedUp: true, message: 'Your account is activated. Please log in.' })
          } else {
            this.setState({
              name: 'User',
              email: null, 
              password: null,
              avatar: 'https://seedlingsgardening.com/wp-content/uploads/sites/9/2016/11/avatar.jpg',
              description: 'Short description of user',
              filename: 'your-file',
              message: 'Something went wrong. Please try again.'
            })
          }
        })
        .catch(console.error)
      
      
    }

    handleFiles = files => {
      this.setState({
        avatar: files.base64,
        filename: files.fileList[0].name
      })
    }
  
    onSubmit = (event) => {
      event.preventDefault()
      this.signUp(this.state)
      this.setState({
        name: 'User',
        email: null, 
        password: null,
        avatar: 'https://seedlingsgardening.com/wp-content/uploads/sites/9/2016/11/avatar.jpg',
        description: 'Short description of user',
        filename: 'your-file'
      })
      // this.props.history.push('/')
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
        handleFiles={this.handleFiles}
      />
    }
  }
