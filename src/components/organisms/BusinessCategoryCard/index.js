import React, { Component } from 'react';

class BusinessCategoryCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={this.props.imageUrl} alt={this.props.name} />
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default BusinessCategoryCard;
