import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'


export default class Header extends Component {

  render() {

    return (
      <div className="header">
        <div className="header__logo">
          <Link to="/" className="header__logo__link">
            <h1>HOME</h1>
            {/* <img
              src="https://i.ibb.co/p1qJtsy/Logo.png"
              alt="Home button"
              className="header__logo__link__image"
            /> */}
          </Link>
        </div>
        {this.props.menuVisible && 
          <div className="header__menu">
            <div className="header__menu__item">
              <Link to="/calendar">Calendar</Link>
            </div>
            <div className="header__menu__item">
              <Link to="/todolist">to do list</Link>
            </div>
            <div className="header__menu__item">
              <Link to="/games">Games</Link>
            </div>
            <div className="header__menu__item">
              <Link to="/signup">Sign up</Link>
            </div>
            <div className="header__menu__item">
              <Link to="/login">Log in</Link>
            </div>
          </div>
        }
        <div className="header__burger" onClick={this.props.openMenu}>
          <div className="header__burger__top"></div>
          <div className="header__burger__middle"></div>
          <div className="header__burger__bottom"></div>
        </div>
        
        
        {/* <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Link to="/" ><Navbar.Brand>
            <img
            src="https://i.ibb.co/p1qJtsy/Logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Home button"
          /></Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav justify className="mr-auto">
              <LinkContainer to="calendar"> 
                <Nav.Link>Calendar</Nav.Link>
              </LinkContainer>
              <LinkContainer to="todolist"> 
                <Nav.Link disabled > Todo List</Nav.Link>
              </LinkContainer>
              <LinkContainer to="games"> 
                <Nav.Link>Games</Nav.Link>
              </LinkContainer>
              
              <NavDropdown title="Extra" id="collapsible-nav-dropdown">
              {!this.props.user ? <div>
                <LinkContainer to="signup"> 
                  <NavDropdown.Item>Sign Up</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="login"> 
                  <NavDropdown.Item>Log in</NavDropdown.Item>
                </LinkContainer></div> :
                <LinkContainer to="/"> 
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer> }
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}
      </div>
    )
  }
}
