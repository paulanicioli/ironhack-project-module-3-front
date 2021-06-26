import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import './styles.css';

class BusinessListing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link
          to={`/businesses/${this.props.businessId}`}
          className="category-url"
        >
          <Container className="business-row">
            <img
              variant="top"
              className="business-image"
              src={this.props.imageUrl}
              alt={this.props.name}
            />
            <div className="business-info">
              <h3>{this.props.name}</h3>
              <small>{this.props.street}</small>
              <small>Funcionamento: {this.props.businessHours}</small>
            </div>
          </Container>
        </Link>
        <hr />
      </div>
    );
  }
}

export default BusinessListing;
