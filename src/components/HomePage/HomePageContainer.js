import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomePage from './HomePage'



class HomePageContainer extends Component {


  render() {
    return (
      <div>
        <HomePage 
        
        /> 
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { user: state.login }
}

export default connect(mapStateToProps)(HomePageContainer)
