import React, { Component } from 'react'
import Header from './Header'
import { connect } from 'react-redux'

class HeaderContainer extends Component {
  state = {
    menuVisible: false
  }

  toggleMenu = (e) => {
    console.log(e.currentTarget.classList.value)
    if (e.currentTarget.classList.value === "header__burger") {
      e.currentTarget.classList.add('open')
      this.setState({ menuVisible: !this.state.menuVisible})
    } else {
      e.currentTarget.classList.remove('open')
      this.setState({ menuVisible: !this.state.menuVisible})
    }
    
  }

  render() {
    return (
      <div>
        <Header 
        menuVisible={this.state.menuVisible}
        toggleMenu={this.toggleMenu}
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
