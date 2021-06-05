import React, { Component } from 'react';

import apiService from '../../services/api.services';

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
        <h1>You've reached the BusinessDetail page!</h1>
        <h3>Name: {this.state.business ? this.state.business.name : ''}</h3>
        <h3>Street: {this.state.business ? this.state.business.street : ''}</h3>
      </div>
    );
  }
}

export default BusinessDetail;
