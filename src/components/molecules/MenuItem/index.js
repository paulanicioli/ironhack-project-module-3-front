import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import AddToCartButton from '../../atoms/AddToCartButton';
import CustomButton from '../../atoms/CustomButton';

import './styles.css';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  formattedPrice() {
    return 'R$' + this.props.product.price.toFixed(2).replace('.', ',');
  }

  handleShowModal = () => {
    this.setState({ show: true });
  };

  handleCloseModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="product-list-container">
        <Link to={`/products/${this.props.product._id}`}>
          <img
            className="product-small-image"
            src={this.props.product.imageUrl}
            alt={this.props.product.name}
          />
        </Link>
        <div className="product-list-info">
          <div>
            <h5>{this.props.product.name}</h5>
            <h6>{this.formattedPrice()}</h6>
          </div>
          <div>
            <small>{this.props.product.description}</small>
            <AddToCartButton onClick={this.handleShowModal}>+</AddToCartButton>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleCloseModal} centered>
          <Modal.Header>
            <Modal.Title>{this.props.product.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Olá! Em breve você poderá contar com mais informações sobre
            {this.props.product.name}
          </Modal.Body>
          <Modal.Footer>
            <CustomButton onClick={this.handleCloseModal}>Fechar</CustomButton>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default MenuItem;
