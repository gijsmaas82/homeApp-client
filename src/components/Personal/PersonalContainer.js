import React, { Component } from 'react'
import Personal from './Personal'

export default class PersonalContainer extends Component {

  state = {
    leftVisible: true,
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
        <Personal 
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
