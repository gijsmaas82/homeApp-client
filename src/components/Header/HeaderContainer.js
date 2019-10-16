import React, { Component } from 'react'
import Header from './Header'
import { connect } from 'react-redux'

class HeaderContainer extends Component {
  

  render() {
    return (
      <div>
        <Header 
        user={this.props.user} 
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

export default connect(mapStateToProps)(HeaderContainer)
