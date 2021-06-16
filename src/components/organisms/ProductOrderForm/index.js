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
        <QuantityInput getQuantity={this.getQuantity} />
        <CommentInput getComment={this.getComment} />
      </>
    );
  }
}

export default ProductOrderForm;
