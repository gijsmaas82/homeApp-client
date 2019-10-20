import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomePage from './HomePage'
import SignUpOrLogIn from './SignUpOrLogIn'

class HomePageContainer extends Component {

  render() {
    return (
      <div>
        {!this.props.user ? <SignUpOrLogIn/> : <HomePage />}
        
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { user: state.login }
}

export default connect(mapStateToProps)(HomePageContainer)
