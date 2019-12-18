import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'


export default class Header extends Component {

  render() {

    return (
      <div>
      <div className="header">
        <div className="header__logo">
          <Link to="/" className="header__logo__link">
            <div className="header__logo__link__homeBtn">
              <span></span>  
              <span></span>  
              <span></span>  
            </div> 
          </Link>
        </div>
        
        <div className="header__burger" onClick={this.props.toggleMenu}>
          <div className="header__burger__top"></div>
          <div className="header__burger__middle"></div>
          <div className="header__burger__bottom"></div>
        </div>
      </div>
        {this.props.menuVisible && 
            <div>
            <div className="menu">{this.props.menuItems.map(item => {
              return <div className="menu__item" onClick={this.props.toggleMenu}>
                <Link to={item.link}>
                  <h3>{item.name}</h3>
                  <div className={item.className}><i class={item.icon}></i></div>
                </Link>
              </div>
            })}</div></div>}
          </div>
        
    )
  }
}
