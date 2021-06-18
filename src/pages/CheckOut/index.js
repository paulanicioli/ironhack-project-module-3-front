import React, { Component } from 'react';

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = { order: localStorage.getItem('order') };
  }

  render() {
    return (
      <div>
        <h1>Checkout Page!</h1>
      </div>
    );
  }
}

export default CheckOut;
