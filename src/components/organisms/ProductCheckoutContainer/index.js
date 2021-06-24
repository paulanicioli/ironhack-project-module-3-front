import React, { Component } from 'react';

import QuantityInput from '../../molecules/QuantityInput';
import CustomButton from '../../atoms/CustomButton';

import './styles.css';

class ProductCheckoutContainer extends Component {
  constructor(props) {
    super(props);
  }

  removeItem = () => {
    const orderArray = JSON.parse(localStorage.getItem('order'));
    const productInArrayIndex = orderArray.findIndex((element) => {
      return element.product == this.props.product._id;
    });
    orderArray.splice(productInArrayIndex, 1);
    localStorage.setItem('order', JSON.stringify(orderArray));
    this.props.removeItem(productInArrayIndex);
  };

  updateQuantity = (value) => {
    const orderArray = JSON.parse(localStorage.getItem('order'));
    const productInArrayIndex = orderArray.findIndex((element) => {
      return element.product == this.props.product._id;
    });
    orderArray[productInArrayIndex].quantity = value;
    localStorage.setItem('order', JSON.stringify(orderArray));
    this.props.updateQuantity(productInArrayIndex, value);
  };

  render() {
    return (
      <div>
        <img
          className="checkout-prod-img"
          src={this.props.product.imageUrl}
          alt={this.props.product.name}
        />
        <h1>{this.props.product.name}</h1>
        <QuantityInput
          product={this.props.product}
          getQuantity={this.updateQuantity}
        />
        <small>{this.props.comments}</small>
        <CustomButton onClick={this.removeItem}>Remover item</CustomButton>
      </div>
    );
  }
}

export default ProductCheckoutContainer;
