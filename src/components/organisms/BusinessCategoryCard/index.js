import React, { Component } from 'react';
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
        <div className="category-container text-center">
          <img
            className="card-image"
            src={this.props.imageUrl}
            alt={this.props.name}
          />
          <h4 className="category-title">{this.props.name}</h4>
        </div>
      </Link>
    );
  }
}

export default BusinessCategoryCard;
