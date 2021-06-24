import React, { Component } from 'react';

import GeneralTemplate from '../../components/templates/GeneralTemplate';
import ProductCheckoutContainer from '../../components/organisms/ProductCheckoutContainer';
import CustomButton from '../../components/atoms/CustomButton';

import apiService from '../../services/api.services';
class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: JSON.parse(localStorage.getItem('order')),
      apiService: apiService,
      productsList: [],
    };
  }

  async componentDidMount() {
    const newProductsList = await this.grabProductInfo();
    this.setState({
      order: this.state.order,
      apiService: this.state.apiService,
      productsList: newProductsList,
    });
  }

  removeItem = (index) => {
    const updatedOrder = this.state.order;
    updatedOrder.splice(index, 1);
    const updatedProductsList = this.state.productsList;
    updatedProductsList.splice(index, 1);
    this.setState({
      order: updatedOrder,
      apiService: this.state.apiService,
      productsList: updatedProductsList,
    });
  };

  updateQuantity = (index, quantity) => {
    const updatedOrder = this.state.order;
    updatedOrder[index].quantity = quantity;
    this.setState({
      order: updatedOrder,
      apiService: this.state.apiService,
      productsList: this.state.productsList,
    });
  };

  async grabProductInfo() {
    try {
      const productsInfoList = [];
      for (let i = 0; i < this.state.order.length; i++) {
        productsInfoList[i] = await this.state.apiService.getProductDetail(
          this.state.order[i].product
        );
      }
      return productsInfoList;
    } catch (error) {
      console.log(error);
    }
  }

  async sendOrder() {
    await this.state.apiService.saveOrder({
      ...JSON.parse(localStorage.getItem('order')),
      user: this.props.user._id,
    });
  }

  renderAllProducts() {
    if (
      this.state.productsList[0] &&
      this.state.productsList[0].productCategory
    ) {
      return this.state.productsList.map((product, index) => {
        return (
          <ProductCheckoutContainer
            key={product._id}
            product={product}
            business={product.business}
            productCategory={product.productCategory}
            quantity={this.state.order[index].quantity}
            comments={this.state.order[index].comment}
            removeItem={this.removeItem}
            updateQuantity={this.updateQuantity}
          />
        );
      });
    }
    return <></>;
  }

  render() {
    return (
      <GeneralTemplate
        updateUserState={this.props.updateUserState}
        user={this.props.user}
      >
        <h1>Seu pedido:</h1>
        {this.renderAllProducts()}
        <CustomButton onClick={this.sendOrder}>Fechar pedido</CustomButton>
      </GeneralTemplate>
    );
  }
}

export default CheckOut;
