import React, { Component } from 'react';

import GeneralTemplate from '../../components/templates/GeneralTemplate';
import OrderDetail from '../../components/organisms/OrderDetail';
import CustomButton from '../../components/atoms/CustomButton';

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
    if (this.state.orders && this.state.orders.length > 0) {
      return this.state.orders.map((element) => {
        return <OrderDetail order={element} key={element._id} />;
      });
    }
    return (
      <>
        <h3>Você ainda não realizou nenhum pedido com a gente ;(</h3>
        <CustomButton onClick={this.returnToCategories}>
          Retornar ao menu de categorias
        </CustomButton>{' '}
      </>
    );
  }

  returnToCategories() {
    this.props.history.push('/categories');
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
          <div className="all-orders-container">{this.renderAllOrders()}</div>
        </div>
      </GeneralTemplate>
    );
  }
}

export default Orders;
