import React, { Component } from 'react';

import OrderQuantityInput from '../../molecules/OrderQuantityInput';
import OrderCommentInput from '../../molecules/OrderCommentInput';
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
        <img
          className="checkout-prod-img"
          src={this.props.product.imageUrl}
          alt={this.props.product.name}
        />
        <h1>{this.props.product.name}</h1>
        <OrderQuantityInput
          product={this.props.product}
          getQuantity={this.updateQuantity}
        />
        <OrderCommentInput
          product={this.props.product}
          getComment={this.updateComment}
        />
        <h6>R${this.props.product.price}</h6>
        <CustomButton onClick={this.removeItem}>Remover item</CustomButton>
      </div>
    );
  }
}

export default ProductCheckoutContainer;
