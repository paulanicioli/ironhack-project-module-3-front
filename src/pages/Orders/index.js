import React, { Component } from 'react';

import GeneralTemplate from '../../components/templates/GeneralTemplate';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <GeneralTemplate>
        <h1>Orders!</h1>
      </GeneralTemplate>
    );
  }
}

export default Orders;
