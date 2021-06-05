import React, { Component } from 'react';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h5>Produto: {this.props.product.name}</h5>
        <p>Preço: {this.props.product.price}</p>
      </div>
    );
  }
}

export default MenuItem;
