import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BusinessListing from '../../components/organisms/BusinessListing';

import apiService from '../../services/api.services';

import './styles.css';

class BusinessList extends Component {
  constructor(props) {
    super(props);
    this.state = { businesses: [] };
    this.apiService = apiService;
  }

  async componentDidMount() {
    const categoryId = this.props.match.params.categoryId;
    const businessList = await this.apiService.getBusinessFromCategory(
      categoryId
    );
    this.setState({ businesses: businessList });
  }

  render() {
    return (
      <div>
        <h1 className="section-title">Businesses</h1>
        <p className="section-subtitle">
          Seus pedidos a um clique de distância
        </p>
        <div className="business-list-container">
          {this.state.businesses.map((element) => {
            return (
              <BusinessListing
                name={element.name}
                imageUrl={element.imageUrl}
                street={element.street}
                businessId={element._id}
                key={element._id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BusinessList;
