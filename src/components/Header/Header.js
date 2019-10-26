import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './Header.css'

export default class Header extends Component {
  render() {
    
    return (
      <div className="header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">HOME</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              <NavDropdown title="Features" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="calendar">Calendar</NavDropdown.Item>
                <NavDropdown.Item href="todolist">To do list</NavDropdown.Item>
                <NavDropdown.Item href="/">Games</NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
            <Nav>
              {!this.props.user ? 
              <div><Nav.Link href="/signup">Sign up</Nav.Link> 
              <Nav.Link href="/login">
              Log in
              </Nav.Link> </div>:
            <Nav.Link href="/login">Profile</Nav.Link> }
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
