import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import './styles.css';

class BusinessCategoryCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card className="category-container text-center">
        <Card.Img
          variant="top"
          className="card-image"
          src={this.props.imageUrl}
          alt={this.props.name}
        />
        <Card.Title className="category-title">{this.props.name}</Card.Title>
      </Card>
    );
  }
}

export default BusinessCategoryCard;
