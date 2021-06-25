import React, { Component } from 'react';

import GeneralTemplate from '../../components/templates/GeneralTemplate';
import OrderDetail from '../../components/organisms/OrderDetail';

import apiService from '../../services/api.services';

import './styles.css';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.apiService = apiService;
    this.state = {};
  }

  async componentDidMount() {
    const orders = await this.apiService.getOrders();
    this.setState({ orders: orders });
  }

  renderAllOrders() {
    return this.state.orders.map((element) => {
      return (
        <>
          <OrderDetail order={element} key={element._id} />
          <hr />
        </>
      );
    });
  }

  render() {
    return (
      <GeneralTemplate
        updateUserState={this.props.updateUserState}
        user={this.props.user}
      >
        <div className="orders-container">
          <h1>Meus pedidos</h1>
          {this.state.orders ? this.renderAllOrders() : ''}
        </div>
      </GeneralTemplate>
    );
  }
}

export default Orders;
