import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './style.css'

class CustomNav extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedUser: '' }
  }

  render() {
    return (
      <Navbar expand="md">
          <Navbar.Brand href="#home">Listo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" align="end">
            <Nav className="me-auto">
              <Nav.Link className="nav-center" href="/">Home</Nav.Link>
              <Nav.Link className="nav-center" href="/categories">Categories</Nav.Link>
            </Nav>
            <Nav>
              { this.state.loggedUser ? 
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> 
              : 
                
                <button>Login</button>  }
            </Nav>
          </Navbar.Collapse>
      </Navbar>
     )
  }
}

export default CustomNav;