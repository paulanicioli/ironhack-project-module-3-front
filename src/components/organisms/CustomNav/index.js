import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import CustomButton from '../../atoms/CustomButton';
import LogoutButton from '../../atoms/LogoutButton';

import logo from '../../../utils/images/listo.png';

import Badge from 'react-bootstrap/Badge';

import { Cart4 } from 'react-bootstrap-icons';

import './style.css';

class CustomNav extends Component {
  constructor(props) {
    super(props);
    this.state = { productsInCart: 0 };
  }

  componentDidMount() {
    const order = localStorage.getItem('order');
    if (order) {
      const orderArray = JSON.parse(order);
      this.setState({ productsInCart: orderArray.length });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.productsInCart !== this.state.productsInCart) {
      this.setState({ productsInCart: nextProps.productsInCart });
    }
  }

  render() {
    return (
      <Navbar sticky="top" expand="md" variant="dark">
        <Navbar.Brand as={Link} to="/">
          <img className="logo-img" src={logo} alt="Listo" />
        </Navbar.Brand>
        {this.props.user.isUserLogged ? (
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/checkout">
              <div className="checkout-icon-container">
                <Cart4 size={26} color="white" />
                {this.state.productsInCart > 0 ? (
                  <div className="checkout-badge">
                    <Badge className="order-tracker">
                      {this.state.productsInCart}
                    </Badge>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </Nav.Link>
          </Nav>
        ) : (
          ''
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" align="end">
          {this.props.user.isUserLogged ? (
            <Nav className="me-auto" variant="dark">
              <Nav.Link as={Link} className="nav-center" to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} className="nav-center" to="/categories">
                Categorias
              </Nav.Link>
              <Nav.Link>Meus pedidos</Nav.Link>
              <LogoutButton updateUserState={this.props.updateUserState} />
              {/* <NavDropdown title="Meu Perfil" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/my-profile">
                  Editar meu perfil
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/checkout">
                  Meu carrinho
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/orders">
                 Meus pedidos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <LogoutButton updateUserState={this.props.updateUserState} />
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          ) : (
            <div className="nav-auth-btn-group">
              <div>
                <Button variant="secondary" sz="sm" as={Link} to="/login" id="nav-login-btn">
                  Entre
                </Button>
              </div>
              <span>ou</span>
              <div>
              <Button variant="light" sz="sm" as={Link} to="/signup" id="nav-signup-btn">
                Cadastre-se
              </Button>

              </div>
            </div>
           
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNav;
