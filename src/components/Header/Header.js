import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './Header.css'

export default class Header extends Component {
  render() {
    
    return (
      <div className="header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home"><Link to={'/'} >HOME</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav> */}
            <Nav>
              <Nav.Link><Link to={'/signup/'} >Sign up</Link></Nav.Link>
              <Nav.Link>
              <Link to={'/login/'} >Log in</Link>
              </Nav.Link>
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
