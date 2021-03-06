import React, { Component } from 'react';

import GeneralTemplate from '../../components/templates/GeneralTemplate';
import ProductCheckoutContainer from '../../components/organisms/ProductCheckoutContainer';
import CustomButton from '../../components/atoms/CustomButton';
import ShadedButton from '../../components/atoms/ShadedButton';

import apiService from '../../services/api.services';

import './styles.css';
class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.apiService = apiService;
    this.state = {
      order: JSON.parse(localStorage.getItem('order')),
      productsList: [],
      price: 0,
    };
  }

  async componentDidMount() {
    if (this.state.order) {
      const newProductsList = await this.grabProductInfo();
      let totalPrice = 0;
      for (let i = 0; i < newProductsList.length; i++) {
        totalPrice += this.state.order[i].quantity * newProductsList[i].price;
      }
      this.setState({
        order: this.state.order,
        productsList: newProductsList,
        price: totalPrice,
      });
    }
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
      productsList: updatedProductsList,
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
      productsList: this.state.productsList,
      price: totalPrice,
    });
  };

  updateComment = (index, comment) => {
    const updatedOrder = this.state.order;
    updatedOrder[index].comment = comment;
    this.setState({
      order: updatedOrder,
      productsList: this.state.productsList,
      price: this.state.price,
    });
  };

  async grabProductInfo() {
    try {
      const productsInfoList = [];
      for (let i = 0; i < this.state.order.length; i++) {
        productsInfoList[i] = await this.apiService.getProductDetail(
          this.state.order[i].product
        );
      }
      return productsInfoList;
    } catch (error) {
      console.log(error);
    }
  }

  sendOrder = async () => {
    await this.apiService.saveOrder({
      order: JSON.parse(localStorage.getItem('order')),
      token: localStorage.getItem('token'),
      totalPrice: this.state.price,
      business: this.state.productsList[0].business._id,
    });
    this.props.history.push('/orders');
    localStorage.removeItem('order');
  };

  returnToBusiness = () => {
    this.props.history.push(
      `/businesses/${this.state.productsList[0].business._id}`
    );
  };

  returnToCategories = () => {
    this.props.history.push('/categories');
  };

  itemsInCart() {
    const order = localStorage.getItem('order');
    if (order) {
      const orderArray = JSON.parse(order);
      return orderArray.length;
    }
    return 0;
  }

  renderAllProducts() {
    if (
      this.state.productsList[0] &&
      this.state.productsList[0].productCategory
    ) {
      return this.state.productsList.map((product, index) => {
        return (
          <div key={product._id}>
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
            {index < this.state.productsList.length - 1 ? <hr /> : ''}
          </div>
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
        productsInCart={this.itemsInCart()}
      >
        {this.state.productsList.length > 0 ? (
          <div className="checkout-container">
            <h4>Seu pedido em {this.state.productsList[0].business.name}:</h4>
            <div className="order-all-products">{this.renderAllProducts()}</div>
            <h5 className="total-price">
              Total: {this.formattedPrice(this.state.price)}
            </h5>
            <div className="send-order-button">
              <ShadedButton onClick={this.returnToBusiness}>
                Retornar ao restaurante
              </ShadedButton>
              <CustomButton onClick={this.sendOrder}>
                Fechar pedido
              </CustomButton>
            </div>
          </div>
        ) : (
          <div className="checkout-container">
            <h3>Voc?? ainda n??o adicionou items ao seu carrinho!</h3>
            <CustomButton onClick={this.returnToCategories}>
              Retornar ao menu de categorias
            </CustomButton>
          </div>
        )}
      </GeneralTemplate>
    );
  }
}

export default CheckOut;
