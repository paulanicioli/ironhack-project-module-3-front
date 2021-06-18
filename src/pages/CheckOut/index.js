import React, { Component } from 'react';

import GeneralTemplate from '../../components/templates/GeneralTemplate';
class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = { order: localStorage.getItem('order') };
  }

  render() {
    return (
      <GeneralTemplate isUserLogged={this.props.isUserLogged}>
        <h1>Checkout Page!</h1>
      </GeneralTemplate>
    );
  }
}

export default CheckOut;
