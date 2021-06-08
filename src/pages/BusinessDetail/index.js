import React, { Component } from 'react';

import ProductCategoryContainer from '../../components/organisms/ProductCategoryContainer';
import apiService from '../../services/api.services';

import './styles.css';
class BusinessDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.apiService = apiService;
  }

  async componentDidMount() {
    const businessId = this.props.match.params.businessId;
    const businessInfo = await this.apiService.getBusinessDetail(businessId);
    this.setState(businessInfo);
  }

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
        <div className="business-menu">
          <h1 className="section-title centered-title">Cardápio</h1>
          <hr />
          <ProductCategoryContainer
            products={this.state.products}
          ></ProductCategoryContainer>
          <hr />
        </div>
      </div>
    );
  }
}

export default BusinessDetail;
