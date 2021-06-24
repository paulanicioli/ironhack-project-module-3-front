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
      price: '',
    };
  }

  async componentDidMount() {
    const newProductsList = await this.grabProductInfo();
    let totalPrice = 0;
    for (let i = 0; i < newProductsList.length; i++) {
      totalPrice += this.state.order[i].quantity * newProductsList[i].price;
    }
    this.setState({
      order: this.state.order,
      apiService: this.state.apiService,
      productsList: newProductsList,
      price: this.formattedPrice(totalPrice),
    });
  }

  formattedPrice(price) {
    return 'R$' + price.toFixed(2).replace('.', ',');
  }

  removeItem = (index) => {
    const updatedOrder = this.state.order;
    updatedOrder.splice(index, 1);
    const updatedProductsList = this.state.productsList;
    updatedProductsList.splice(index, 1);
    let totalPrice = 0;
    for (let i = 0; i < updatedProductsList.length; i++) {
      totalPrice += updatedOrder[i].quantity * updatedProductsList[i].price;
    }
    this.setState({
      order: updatedOrder,
      apiService: this.state.apiService,
      productsList: updatedProductsList,
      price: this.formattedPrice(totalPrice),
    });
  };

  updateQuantity = (index, quantity) => {
    const updatedOrder = this.state.order;
    updatedOrder[index].quantity = quantity;
    let totalPrice = 0;
    for (let i = 0; i < updatedOrder.length; i++) {
      totalPrice += updatedOrder[i].quantity * this.state.productsList[i].price;
    }
    this.setState({
      order: updatedOrder,
      apiService: this.state.apiService,
      productsList: this.state.productsList,
      price: this.formattedPrice(totalPrice),
    });
  };

  updateComment = (index, comment) => {
    const updatedOrder = this.state.order;
    updatedOrder[index].comment = comment;
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

  sendOrder = async () => {
    console.log('Pedido salvo!');
    console.log(this.state.order);
    console.log(this.state.price);
    // await this.state.apiService.saveOrder({
    //   ...JSON.parse(localStorage.getItem('order')),
    //   user: this.props.user._id,
    // });
  };

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
            updateComment={this.updateComment}
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
        <h6>Preço final: {this.state.price}</h6>
        <CustomButton onClick={this.sendOrder}>Fechar pedido</CustomButton>
      </GeneralTemplate>
    );
  }
}

export default CheckOut;
