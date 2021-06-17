import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CustomButton from '../../atoms/CustomButton';
import LogoutButton from '../../atoms/LogoutButton'

import './style.css'

class CustomNav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Navbar expand="md">
          <Navbar.Brand href="/">Listo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" align="end">
            <Nav className="me-auto">
              <Nav.Link as={Link} className="nav-center" to="/">Home</Nav.Link>
              <Nav.Link as={Link} className="nav-center" to="/categories">Categories</Nav.Link>
            </Nav>
            <Nav>
              { this.props.user.isUserLogged ? 
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <LogoutButton />
                  </NavDropdown.Item>
                </NavDropdown> 
              :                
                <Link to="/login">
                  <CustomButton>Login</CustomButton>
                </Link>
                }
            </Nav>
          </Navbar.Collapse>
      </Navbar>
     )
  }
}

export default CustomNav;