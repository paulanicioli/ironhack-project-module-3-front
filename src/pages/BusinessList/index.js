import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <h1> You've reached the BusinessList page!</h1>
      </div>
    );
  }
}

export default BusinessList;
