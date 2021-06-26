import React, { Component } from 'react';

import OrderQuantityInput from '../../molecules/OrderQuantityInput';
import OrderCommentInput from '../../molecules/OrderCommentInput';

import { ArchiveFill } from 'react-bootstrap-icons';
import './styles.css';

class ProductCheckoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtotalPrice: 0,
    };
  }

  formattedPrice(price) {
    return 'R$' + price.toFixed(2).replace('.', ',');
  }

  removeItem = (e) => {
    e.preventDefault();
    const orderArray = JSON.parse(localStorage.getItem('order'));
    const productInArrayIndex = orderArray.findIndex((element) => {
      return element.product == this.props.product._id;
    });
    orderArray.splice(productInArrayIndex, 1);
    localStorage.setItem('order', JSON.stringify(orderArray));
    this.props.removeItem(productInArrayIndex);
  };

  updateQuantity = (value) => {
    this.setState({ subtotalPrice: value * this.props.product.price });
    const orderArray = JSON.parse(localStorage.getItem('order'));
    const productInArrayIndex = orderArray.findIndex((element) => {
      return element.product == this.props.product._id;
    });
    orderArray[productInArrayIndex].quantity = value;
    localStorage.setItem('order', JSON.stringify(orderArray));
    this.props.updateQuantity(productInArrayIndex, value);
  };

  updateComment = (value) => {
    const orderArray = JSON.parse(localStorage.getItem('order'));
    const productInArrayIndex = orderArray.findIndex((element) => {
      return element.product == this.props.product._id;
    });
    orderArray[productInArrayIndex].comment = value;
    localStorage.setItem('order', JSON.stringify(orderArray));
    this.props.updateComment(productInArrayIndex, value);
  };

  render() {
    return (
      <div>
        <div className="checkout-first-row-container">
          <div className="product-info-container">
            <img
              className="checkout-prod-img"
              src={this.props.product.imageUrl}
              alt={this.props.product.name}
            />
            <h6 className="product-name">{this.props.product.name}</h6>
          </div>
          <OrderQuantityInput
            product={this.props.product}
            getQuantity={this.updateQuantity}
          />
        </div>
        <div className="checkout-second-row-container">
          <OrderCommentInput
            product={this.props.product}
            getComment={this.updateComment}
          />
          <h6>{this.formattedPrice(this.state.subtotalPrice)}</h6>
        </div>
        <a className="remove-item-anchor" onClick={this.removeItem}>
          <span>Remover</span> <ArchiveFill />
        </a>
      </div>
    );
  }
}

export default ProductCheckoutContainer;
