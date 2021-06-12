import React, { Component } from 'react';

import './styles.css';

class AddToCartButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="add-product-button" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default AddToCartButton;
