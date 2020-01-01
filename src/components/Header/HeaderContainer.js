import React, { Component } from 'react'
import Header from './Header'
import { connect } from 'react-redux'

class HeaderContainer extends Component {
  state = {
    menuVisible: false,
    menuItems: [
      {className:'menu__item__calendar', name: 'Calendar', link:'/calendar', icon:'fas fa-calendar'},
      {className:'menu__item__games', name: 'Games', link: '/games', icon:'fas fa-gamepad'}, 
      {className:'menu__item__photos', name: 'Photos', link: '/photo-search', icon:'fas fa-camera'}, 
      {className:'menu__item__login', name: 'Log In', link:'/login', icon:'fas fa-sign-in-alt'}, 
      {className:'menu__item__signup', name: 'Sign Up', link:'/signup', icon:'fas fa-user-plus'},  
       ]
  }

  toggleMenu = (e) => {
    
    this.setState({ menuVisible: !this.state.menuVisible})
    
  }

  render() {
    return (
      <div>
        <Header 
        menuVisible={this.state.menuVisible}
        toggleMenu={this.toggleMenu}
        user={this.props.user} 
        menuItems={this.state.menuItems}
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
