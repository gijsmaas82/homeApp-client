import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
  render() {
    console.log('user:', this.props.user)
    return (
      <div className="header">
        <div className="headerLink" ><Link to={'/'} >HOME</Link></div>
        {this.props.user ? <div></div> : 
        <div className="headerLink" ><Link to={'/signup/'} >Sign up</Link></div>}
        {this.props.user ? 
           <div className="headerLink" ><Link to={'/profile/'} >{this.props.user.userName}</Link></div> : 
          <div className="headerLink" ><Link to={'/login/'} >Log in</Link></div>}
      </div>
    )
  }
}
