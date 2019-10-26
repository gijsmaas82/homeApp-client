import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
  render() {
    
    return (
      <div className="header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand><Link to="/" >HOME</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Features" id="collapsible-nav-dropdown">
                <NavDropdown.Item><Link to="calendar" >Calendar</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item><Link to="todolist" >Todo list</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {!this.props.user ? 
              <div><Nav.Link ><Link to="/signup" >Sign up</Link></Nav.Link> 
              <Nav.Link >
              <Link to="/login" >Log in</Link>
              </Nav.Link> </div>:
            <Nav.Link><Link to="/login" >profile</Link></Nav.Link> }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <div className="headerLink" ><Link to={'/'} >HOME</Link></div>
        {this.props.user ? <div></div> : 
        <div className="headerLink" ><Link to={'/signup/'} >Sign up</Link></div>}
        {this.props.user ? 
           <div className="headerLink" ><Link to={'/profile/'} >{this.props.user.userName}</Link></div> : 
          <div className="headerLink" ><Link to={'/login/'} >Log in</Link></div>} */}
      </div>
    )
  }
}
