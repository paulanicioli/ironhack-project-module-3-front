import React, { Component } from 'react';

import GeneralTemplate from '../../components/templates/GeneralTemplate';
import ProductCheckoutContainer from '../../components/organisms/ProductCheckoutContainer';
import CustomButton from '../../components/atoms/CustomButton';

import apiService from '../../services/api.services';

import './styles.css';
class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: JSON.parse(localStorage.getItem('order')),
      apiService: apiService,
      productsList: [],
      formattedPrice: '',
      price: 0,
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
      formattedPrice: this.formattedPrice(totalPrice),
      price: totalPrice,
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
      formattedPrice: this.formattedPrice(totalPrice),
      price: totalPrice,
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
      fomattedPrice: this.formattedPrice(totalPrice),
      price: totalPrice,
    });
    console.log('new state: ', this.state);
  };

  updateComment = (index, comment) => {
    const updatedOrder = this.state.order;
    updatedOrder[index].comment = comment;
    this.setState({
      order: updatedOrder,
      apiService: this.state.apiService,
      productsList: this.state.productsList,
      formattedPrice: this.state.formattedPrice,
      price: this.state.price,
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
    console.log('user : ', this.props.user);
    await this.state.apiService.saveOrder({
      ...JSON.parse(localStorage.getItem('order')),
      token: localStorage.getItem('token'),
      totalPrice: this.state.price,
    });
  };

  renderAllProducts() {
    if (
      this.state.productsList[0] &&
      this.state.productsList[0].productCategory
    ) {
      return this.state.productsList.map((product, index) => {
        return (
          <>
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
            <hr />
          </>
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
        <div className="checkout-container">
          <h1>Seu pedido:</h1>
          {this.renderAllProducts()}
          <h5 className="total-price">Total: {this.state.formattedPrice}</h5>
          <div className="send-order-button">
            <CustomButton onClick={this.sendOrder}>Fechar pedido</CustomButton>
          </div>
        </div>
      </GeneralTemplate>
    );
  }
}

export default CheckOut;
