import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomePage from './HomePage'



class HomePageContainer extends Component {
  state = {
    leftVisible: false,
    rightVisible: false,
  }
  openLeft = (e) => {
    e.currentTarget.classList.add("open")
    this.setState({leftVisible: !this.state.leftVisible})
  }

  closeLeft = (e) => {
    e.currentTarget.classList.remove("open")
    this.setState({leftVisible: !this.state.leftVisible})
  }

  openRight = (e) => {
    e.currentTarget.classList.add("open")
    this.setState({rightVisible: !this.state.rightVisible})
  }

  closeRight = (e) => {
    e.currentTarget.classList.remove("open")
    this.setState({rightVisible: !this.state.rightVisible})
  }

  render() {
    return (
      <div>
        <HomePage 
        openLeft={this.openLeft}
        closeLeft={this.closeLeft}
        openRight={this.openRight}
        closeRight={this.closeRight}
        leftVisible={this.state.leftVisible}
        rightVisible={this.state.rightVisible}
        /> 
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { user: state.login }
}

export default connect(mapStateToProps)(HomePageContainer)
