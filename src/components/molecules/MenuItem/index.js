import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import AddToCartButton from '../../atoms/AddToCartButton';
import CustomButton from '../../atoms/CustomButton';
import ShadedButton from '../../atoms/ShadedButton';

import ProductOrderForm from '../../organisms/ProductOrderForm';

import './styles.css';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, quantity: 0 };
  }

  formattedPrice() {
    return 'R$' + this.props.product.price.toFixed(2).replace('.', ',');
  }

  handleShowModal = () => {
    this.setState({ show: true, quantity: this.state.quantity });
  };

  handleCloseModal = () => {
    this.setState({ show: false, quantity: 0 });
  };

  handleAddToCart = () => {
    this.props.addToCart({
      product: this.props.product._id,
      quantity: this.state.quantity,
    });
    this.handleCloseModal();
  };

  quantityAdded = (qtd) => {
    this.setState({ show: this.state.show, quantity: qtd });
  };

  render() {
    return (
      <>
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
              <Link
                className="product-url"
                to={`/products/${this.props.product._id}`}
              >
                <h5>{this.props.product.name}</h5>
              </Link>
              <h6 className="price-container">{this.formattedPrice()}</h6>
            </div>
            <div>
              <small>{this.props.product.description}</small>
              <AddToCartButton onClick={this.handleShowModal}>
                +
              </AddToCartButton>
            </div>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleCloseModal} centered>
          <Modal.Header>
            <Modal.Title>
              <img
                className="modal-header-img"
                src={this.props.product.imageUrl}
                alt={this.props.product.name}
              />
              {this.props.product.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ProductOrderForm getQuantity={this.quantityAdded} />
          </Modal.Body>
          <Modal.Footer>
            <ShadedButton onClick={this.handleCloseModal}>Fechar</ShadedButton>
            <CustomButton onClick={this.handleAddToCart}>
              Adicionar ao carrinho
            </CustomButton>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default MenuItem;
