import React, { Component } from 'react';
import MenuItem from '../../molecules/MenuItem';

import './style.css'

class ProductCategoryContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="product-category-container">
        {this.props.products
          ? this.props.products.map((element) => {
              return (
                <MenuItem
                  key={element._id}
                  product={element}
                  addToCart={this.props.addToCart}
                />
              );
            })
          : ''}
      </div>
    );
  }
}

export default ProductCategoryContainer;
