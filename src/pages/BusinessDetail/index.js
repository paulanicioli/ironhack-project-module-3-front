import React, { Component } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import ProductCategoryContainer from '../../components/organisms/ProductCategoryContainer';
import apiService from '../../services/api.services';

import './styles.css';
class BusinessDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.apiService = apiService;
  }

  async componentDidMount() {
    const businessId = this.props.match.params.businessId;
    const businessInfo = await this.apiService.getBusinessDetail(businessId);
    const productCategories = this.aggregateByCategories(businessInfo.products);
    businessInfo.productCategories = productCategories;
    this.setState({ ...businessInfo, show: this.state.show });
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

  renderProductCategories() {
    return this.state.productCategories.map((element) => {
      return (
        <div key={element.name}>
          <h1 className="section-title">{element.name}</h1>
          <ProductCategoryContainer products={element.products} />
          <hr />
        </div>
      );
    });
  }

  handleShowModal = (e) => {
    const previousState = { ...this.state };
    previousState.show = true;
    this.setState(previousState);
  };

  handleCloseModal = (e) => {
    const previousState = { ...this.state };
    previousState.show = false;
    this.setState(previousState);
  };

  render() {
    return (
      <div>
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
        <Button className="center-horizontally" onClick={this.handleShowModal}>
          Ver mais informações
        </Button>
        <Modal show={this.state.show} onHide={this.handleCloseModal} centered>
          <Modal.Header>
            <Modal.Title>
              {this.state.business ? this.state.business.name : ''}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Olá! Em breve você poderá contar com mais informações sobre{' '}
            {this.state.business ? this.state.business.name : ''}{' '}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleCloseModal}>Fechar</Button>
          </Modal.Footer>
        </Modal>
        <div className="business-menu">
          <h1 className="section-title centered-title">Cardápio</h1>
          <hr />
          {this.state.productCategories ? this.renderProductCategories() : ''}
        </div>
      </div>
    );
  }
}

export default BusinessDetail;
