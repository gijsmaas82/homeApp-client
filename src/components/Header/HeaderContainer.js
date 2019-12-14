import React, { Component } from 'react'
import Header from './Header'
import { connect } from 'react-redux'

class HeaderContainer extends Component {
  state = {
    menuVisible: false
  }

  openMenu = () => {
    this.setState({ menuVisible: !this.state.menuVisible})
  }

  render() {
    return (
      <div>
        <Header 
        menuVisible={this.state.menuVisible}
        openMenu={this.openMenu}
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
