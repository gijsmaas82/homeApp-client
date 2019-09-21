import React, { Component } from 'react'
import SignUpContainer from '../SignUp/SignUpContainer'

export default class HomePageContainer extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <SignUpContainer />
      </div>
    )
  }
}
