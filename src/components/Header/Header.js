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
        {!this.props.menuVisible ? 
        <div className="header__sun" onClick={this.props.toggleMenu}></div> : 
        <div className="header__moon" onClick={this.props.toggleMenu}></div>}
      </div>
        {this.props.menuVisible && 
        <div>
          <div className="menu">
            <div className="menu__header">
              <h2>Menu</h2>
            </div> 
            <div className="menu__items">{this.props.menuItems.map(item => {
              return <div key={item.name} className="menu__items__item" onClick={this.props.toggleMenu}>
                <Link to={item.link}>
                  <p>{item.name}</p>
                  <div className={item.className}><i className={item.icon}></i></div>
                </Link>
              </div>})}
            </div>
          </div>
        </div>}
    </div>     
    )
  }
}
