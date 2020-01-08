import React, { Component } from 'react'
import SignUpContainer from '../SignUp/SignUpContainer'
import LogInContainer from '../LogIn/LogInContainer'

export default class SignUpAndLogIn extends Component {
  state = {
    signUp: false,
    LogIn: false
  }

  activateSignUp = () => {
    this.setState({ signUp: true, LogIn: false })
  }

  activateLogIn = () => {
    this.setState({ signUp: false, LogIn: true })
  }

  render() {
    return (
      <div className="signuploginpage">
        <div className="signuploginpage__header">
          <h1>Sign up or Log in</h1>
        </div>
        <div className="signuploginpage__left">
          <div className="signuploginpage__left__btn" 
          onClick={this.activateSignUp}
            ><h2>Sign Up</h2>
          </div>
        </div>
        <div className="signuploginpage__middle">
          <div className="signuploginpage__middle__content">
            {this.state.signUp && <SignUpContainer />}
            {this.state.LogIn && <LogInContainer />}
          </div>
        </div>
        <div className="signuploginpage__right">
        <div className="signuploginpage__right__btn" 
          onClick={this.activateLogIn}
            ><h2>Log In</h2>
          </div>
        </div>
        <div className="homepage__span" >
          <div className="homepage__span__info">
            <p>Gijs Maas</p>
            <p>Haarlem</p>
            <p>drs.g.maas@gmail.com</p>
          </div>
          <div className="homepage__span__links">
            <a href="https://github.com/gijsmaas82"><i className="fab fa-github" /></a>
            <a href="https://www.linkedin.com/in/drs-gijs-maas/"><i className="fab fa-linkedin" /></a>
          </div>
        </div>        
      </div>
    )
  }
}
