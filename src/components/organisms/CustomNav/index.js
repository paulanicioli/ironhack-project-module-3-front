import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CustomButton from '../../atoms/CustomButton';
import LogoutButton from '../../atoms/LogoutButton';

import logo from '../../../utils/images/listo.png';

import './style.css';

class CustomNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar sticky="top" expand="md" variant="dark">
        <Navbar.Brand to="/">
          <img className="logo-img" src={logo} alt="Listo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" align="end">
          {this.props.user.isUserLogged ? (
            <Nav className="me-auto">
              <Nav.Link as={Link} className="nav-center" to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} className="nav-center" to="/categories">
                Categorias
              </Nav.Link>
              <NavDropdown title="Meu Perfil" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/my-profile">
                  Editar meu perfil
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/checkout">
                  Meu carrinho
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/checkout">
                  Pedidos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <LogoutButton updateUserState={this.props.updateUserState} />
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Link to="/login">
              <CustomButton>Login</CustomButton>
            </Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNav;
