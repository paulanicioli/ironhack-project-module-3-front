import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AddToCartButton from '../../atoms/AddToCartButton';

import './styles.css';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  formattedPrice() {
    return 'R$' + this.props.product.price.toFixed(2).replace('.', ',');
  }

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
            <AddToCartButton />
          </div>
        </div>
      </div>
    );
  }
}

export default MenuItem;
