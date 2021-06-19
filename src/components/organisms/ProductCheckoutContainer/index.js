import React, { Component } from 'react';

import './styles.css';

class ProductCheckoutContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <img
          className="checkout-prod-img"
          src={this.props.product.imageUrl}
          alt={this.props.product.name}
        />
        <h1>{this.props.product.name}</h1>
        <small>{this.props.quantity}</small>
        <small>{this.props.comments}</small>
      </div>
    );
  }
}

export default ProductCheckoutContainer;
