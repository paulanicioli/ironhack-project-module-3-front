import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import './styles.css';

class BusinessCategoryCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link
        to={`/categories/${this.props.categoryId}`}
        className="category-url"
      >
        <Card className="category-container text-center">
          <Card.Img
            variant="top"
            className="card-image"
            src={this.props.imageUrl}
            alt={this.props.name}
          />
          <Card.Title className="category-title">{this.props.name}</Card.Title>
        </Card>
      </Link>
    );
  }
}

export default BusinessCategoryCard;
