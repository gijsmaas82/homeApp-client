import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomePage from './HomePage'


class HomePageContainer extends Component {
  state = {
    leftVisible: false,
    middleVisible: false,
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

  openMiddle = (e) => {
    e.currentTarget.classList.add("open")
    this.setState({middleVisible: !this.state.middleVisible})
  }

  closeMiddle = (e) => {
    e.currentTarget.classList.remove("open")
    this.setState({middleVisible: !this.state.middleVisible})
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
        openMiddle={this.openMiddle}
        closeMiddle={this.closeMiddle}  
        openRight={this.openRight}
        closeRight={this.closeRight}
        leftVisible={this.state.leftVisible}
        middleVisible={this.state.middleVisible}
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
