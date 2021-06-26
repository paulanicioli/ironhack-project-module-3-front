import React, { Component } from 'react';

import Modal from 'react-bootstrap/Modal';

import GeneralTemplate from '../../components/templates/GeneralTemplate';
import ProductCategoryContainer from '../../components/organisms/ProductCategoryContainer';
import CustomButton from '../../components/atoms/CustomButton';
import apiService from '../../services/api.services';

import './styles.css';
class BusinessDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      productsInCart: this.itemsInCart(),
    };
    this.apiService = apiService;
  }

  async componentDidMount() {
    const businessId = this.props.match.params.businessId;
    const businessInfo = await this.apiService.getBusinessDetail(businessId);
    const productCategories = this.aggregateByCategories(businessInfo.products);
    businessInfo.productCategories = productCategories;
    this.setState({
      ...businessInfo,
      show: this.state.show,
      productsInCart: this.state.productsInCart,
    });
  }

  itemsInCart() {
    const order = localStorage.getItem('order');
    if (order) {
      const orderArray = JSON.parse(order);
      return orderArray.length;
    }
    return 0;
  }

  aggregateByCategories(products) {
    return products
      .map((element) => {
        return element.productCategory.name;
      })
      .filter((item, index, array) => {
        return array.indexOf(item) === index;
      })
      .map((e) => {
        return {
          name: e,
          products: products.filter((p) => {
            return p.productCategory.name === e;
          }),
        };
      });
  }

  addToCart = (partialOrder) => {
    const previousOrder = localStorage.getItem('order');
    if (previousOrder) {
      const previousOrderArray = JSON.parse(previousOrder);
      const productInArrayIndex = previousOrderArray.findIndex((element) => {
        return element.product == partialOrder.product;
      });
      if (productInArrayIndex >= 0) {
        previousOrderArray[productInArrayIndex].quantity =
          partialOrder.quantity;
        previousOrderArray[productInArrayIndex].comment = partialOrder.comment;
      } else {
        previousOrderArray.push(partialOrder);
        this.setState({
          ...this.state,
          productsInCart: this.state.productsInCart + 1,
        });
        console.log(this.state);
      }
      localStorage.setItem('order', JSON.stringify(previousOrderArray));
    } else {
      localStorage.setItem('order', JSON.stringify([partialOrder]));
      this.setState({ ...this.state, productsInCart: 1 });
      console.log(this.state);
    }
  };

  renderProductCategories() {
    return this.state.productCategories.map((element) => {
      return (
        <div key={element.name}>
          <h1 className="section-title">{element.name}</h1>
          <ProductCategoryContainer
            products={element.products}
            addToCart={this.addToCart}
          />
          <hr />
        </div>
      );
    });
  }

  handleShowModal = () => {
    const previousState = { ...this.state };
    previousState.show = true;
    this.setState(previousState);
  };

  handleCloseModal = () => {
    const previousState = { ...this.state };
    previousState.show = false;
    this.setState(previousState);
  };

  sendToCheckout = () => {
    this.props.history.push('/checkout');
  };

  render() {
    return (
      <GeneralTemplate
        updateUserState={this.props.updateUserState}
        user={this.props.user}
        productsInCart={this.state.productsInCart}
      >
        <img
          className="business-detail-image"
          src={this.state.business ? this.state.business.imageUrl : ''}
          alt={this.state.business ? this.state.business.name : ''}
        />
        <h1 className="section-title">
          {this.state.business ? this.state.business.name : ''}
        </h1>
        <small className="business-address">
          {this.state.business ? this.state.business.street : ''}
        </small>
        <div className="center-horizontally">
          <CustomButton onClick={this.handleShowModal}>
            Ver mais informações
          </CustomButton>
        </div>
        <Modal show={this.state.show} onHide={this.handleCloseModal} centered>
          <Modal.Header>
            <Modal.Title>
              {this.state.business ? this.state.business.name : ''}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.business ? (
              <div className="business-info-modal">
                <h6>
                  Horário de funcionamento:{' '}
                  <span>{this.state.business.businessHours}</span>
                </h6>
                <h6>
                  Telefone: <span>{this.state.business.phoneNumber}</span>
                </h6>
                <h6>
                  Endereço:{' '}
                  <span>
                    {this.state.business.street}, {this.state.business.city} -{' '}
                    {this.state.business.state}{' '}
                  </span>
                </h6>
              </div>
            ) : (
              ''
            )}
          </Modal.Body>
          <Modal.Footer>
            <CustomButton onClick={this.handleCloseModal}>Fechar</CustomButton>
          </Modal.Footer>
        </Modal>
        <div className="business-menu">
          <h1 className="section-title centered-title">Cardápio</h1>
          <hr />
          {this.state.productCategories ? this.renderProductCategories() : ''}
          <div className="centered-checkout-button">
            <CustomButton onClick={this.sendToCheckout}>
              Ir para meu carrinho
            </CustomButton>
          </div>
        </div>
      </GeneralTemplate>
    );
  }
}

export default BusinessDetail;
