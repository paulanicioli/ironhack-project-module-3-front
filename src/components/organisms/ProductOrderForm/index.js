import React, { Component } from 'react';

import QuantityInput from '../../molecules/QuantityInput';
import CommentInput from '../../molecules/CommentInput';

class ProductOrderForm extends Component {
  constructor(props) {
    super(props);
  }

  getQuantity = (values) => {
    this.props.getQuantity(values);
  };

  getComment = (comment) => {
    this.props.getComment(comment);
  };

  render() {
    return (
      <>
        <h6>Quantidade a ser adicionada no carrinho:</h6>
        <QuantityInput
          getQuantity={this.getQuantity}
          product={this.props.product}
        />
        <CommentInput
          getComment={this.getComment}
          product={this.props.product}
        />
      </>
    );
  }
}

export default ProductOrderForm;
