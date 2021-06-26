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

  itemsInCart() {
    const order = localStorage.getItem('order');
    if (order) {
      const orderArray = JSON.parse(order);
      return orderArray.length;
    }
    return 0;
  }

  async componentDidMount() {
    const orders = await this.apiService.getOrders();
    this.setState({ orders: orders });
  }

  renderAllOrders() {
    return this.state.orders.map((element) => {
      return <OrderDetail order={element} key={element._id} />;
    });
  }

  render() {
    return (
      <GeneralTemplate
        updateUserState={this.props.updateUserState}
        user={this.props.user}
        productsInCart={this.itemsInCart()}
      >
        <div className="orders-container">
          <h1 className="section-title">Meus pedidos</h1>
          <div className="all-orders-container">
            {this.state.orders ? this.renderAllOrders() : ''}
          </div>
        </div>
      </GeneralTemplate>
    );
  }
}

export default Orders;
