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
            comments={this.state.order[index].comments}
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
        user={this.props.user}>
        <h1>Seu pedido:</h1>
        {this.renderAllProducts()}
        <CustomButton>Fechar pedido</CustomButton>
      </GeneralTemplate>
    );
  }
}

export default CheckOut;
