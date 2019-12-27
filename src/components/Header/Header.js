import React, { Component } from 'react'
import { Link } from 'react-router-dom'


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
              return <div key={item.name} className="menu__item" onClick={this.props.toggleMenu}>
                <Link to={item.link}>
                  <h3>{item.name}</h3>
                  <div className={item.className}><i className={item.icon}></i></div>
                </Link>
              </div>
            })}</div></div>}
          </div>
        
    )
  }
}
